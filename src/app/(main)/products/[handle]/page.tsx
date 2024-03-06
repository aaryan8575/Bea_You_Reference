import ProductOverview from "@/containers/ProductOverview"
import { BASE_URL, SITE_NAME } from "@/lib/constants"
import { getProductByHandle, getReviewByProduct } from "@/lib/data"
import { Metadata } from "next"
import { notFound } from "next/navigation"

type Props = {
  params: { handle: string }
}

type OGProps = {
  url: string
  width: number
  height: number
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getProductByHandle(params.handle)

  const product = data.products[0]

  if (!product) {
    notFound()
  }

  const newDesc = product.description?.replaceAll(/\*/gm, "")
  const images: OGProps[] = [
    {
      url: product.thumbnail!, // Must be an absolute URL
      width: 1600,
      height: 1200,
    },
    ...(product.images
      ? product.images?.map((image) => {
          return {
            url: image.url!,
            width: 1600,
            height: 1200,
          }
        })
      : []),
  ]

  return {
    title: `${product.title}`,
    description: `${newDesc}`,
    openGraph: {
      title: product.title,
      description: newDesc,
      url: `${BASE_URL}/products/${product.handle}`,
      siteName: SITE_NAME,
      images: [...images],
      locale: "en_IN",
      type: "website",
    },
  }
}

export default async function ProductPage({ params }: Props) {
  const { products } = await getProductByHandle(params.handle).catch((err) => {
    notFound()
  })
  const reviewData = await getReviewByProduct(products[0].id!)

  const newDesc = products[0].description?.replaceAll(/\*/gm, "")
  const otherImages = products[0].images?.map((item) => item.url)
  const allImages = [products[0].thumbnail, ...otherImages]
  let length = 0
  const AvergeRating = () => {
    const sumOfRatings = reviewData?.productReview?.reduce((a, c) => {
      if (c.status === "approved") {
        length++
        return a + c.rating
      }
      return a
    }, 0)
    const averageRating = sumOfRatings / length
    return averageRating
  }

  const reviews = reviewData.productReview
    .filter((review) => review.status === "approved")
    .map((review) => {
      return {
        "@type": "Review",
        author: `${SITE_NAME} Customer`,
        datePublished: review.created_at.split("T")[0],
        reviewBody: review.content,
        name: review.title,
        reviewRating: {
          "@type": "Rating",
          bestRating: "5",
          ratingValue: review.rating.toString(),
          worstRating: "1",
        },
      }
    })

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: products[0].title,
    image: allImages,
    description: newDesc,
    brand: {
      "@type": "Brand",
      name: `${SITE_NAME}`,
    },
    review: reviews,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: AvergeRating(),
      reviewCount: length,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductOverview product={products[0]} reviewData={reviewData} />
    </>
  )
  // return <ProductTemplate product={products[0]} />
}

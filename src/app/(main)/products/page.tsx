import ProductsBanner from "@/containers/ProductsBanner"
import ProductsGrid from "@/containers/ProductsGrid"
import ProductsGridSkeleton from "@/containers/ProductsGrid/ProductsGridSkeleton"
import { BASE_URL, SITE_NAME } from "@/lib/constants"
import { getProductsList } from "@/lib/data"
import { Metadata } from "next"
import { Suspense } from "react"

type DealProps = {
  id: string
  ends_at: string
  is_disabled: boolean
  deleted_at: string
  code: string
  metadata: {
    title: string
    thumbnail: string
  }
}

export const metadata: Metadata = {
  title: "Shop",
  description: "Explore all of our products.",
  openGraph: {
    title: "Shop",
    description: "Explore all of our products.",
    url: `${BASE_URL}/products`,
    siteName: SITE_NAME,
    locale: "en_IN",
    type: "website",
  },
}

export default async function ProductsPage() {
  const {
    response: { products },
  } = await getProductsList({ queryParams: {} })

  const allProducts = products?.map((item) => {
    return {
      "@type": "Product",
      image: item.thumbnail,
      url: `${BASE_URL}/products/${item.handle}`,
      name: item.title,
      // offers: {
      //   "@type": "Offer",
      //   priceCurrency: "RUB",
      //   price: "4399.00",
      // },
    }
  })

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    url: `${BASE_URL}/products`,
    numberOfItems: products?.length,
    itemListElement: [...allProducts],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductsBanner />
      <Suspense fallback={<ProductsGridSkeleton />}>
        <ProductsGrid products={products} />
      </Suspense>
    </>
  )
}

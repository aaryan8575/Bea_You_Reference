"use client"
import ProductReviewForm from "@/components/products/ProductReviewForm"
import ProductReviewList from "@/components/products/ProductReviewList"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"

type Props = {
  product: PricedProduct
  reviewData: any
}

const ProductReviews = ({ reviewData, product }: Props) => {
  if (!process.env.NEXT_PUBLIC_REVIEW) {
    return null
  }
  return (
    <section className="grid md:grid-cols-2 gap-6">
      <ProductReviewList reviewData={reviewData} />
      {reviewData && (
        <div className="h-max md:sticky top-[100px]">
          <ProductReviewForm
            productDetailData={product}
            reviews={reviewData.productReview}
          />
        </div>
      )}
    </section>
  )
}

export default ProductReviews

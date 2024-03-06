"use client"
import style from "./relatedproduct.module.css"
import { memo } from "react"
import { useProducts } from "medusa-react"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { ProductProvider } from "@/lib/context/product-context"
import ProductCard, {
  ProductCardSkeleton,
} from "@/components/products/ProductCard"

type Props = {
  productDetailData: PricedProduct
}

const sales_channel = process.env.NEXT_PUBLIC_SALES_CHANNEL_ID || ""

const RelatedProduct = ({ productDetailData }: Props) => {
  const { isLoading, products } = useProducts({
    limit: 10,
    category_id: productDetailData?.categories?.map((x) => x.id),
    expand: "categories,variants",
    sales_channel_id: [sales_channel],
  })
  return (
    <div className={style.section}>
      <h4 className={style.title}>Related Products</h4>
      <div className={style.slider}>
        <section className={`no-scrollbar ${style.snap_x_slider}`}>
          {isLoading &&
            Array(products?.length || 5)
              .fill("*")
              .map((_, index) => (
                <div key={index} className={style.span_x_slide}>
                  <ProductCardSkeleton />
                </div>
              ))}
          {products
            ?.filter((x) => x.id !== productDetailData?.id)
            ?.map((item) => {
              return (
                <div key={item.id} className={style.span_x_slide}>
                  <ProductProvider key={item.id} product={item}>
                    <ProductCard key={item.id} product={item} />
                  </ProductProvider>
                </div>
              )
            })}
        </section>
      </div>
    </div>
  )
}

export default memo(RelatedProduct)

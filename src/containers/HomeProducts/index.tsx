"use client"
import { topProduct } from "@/lib/constData"
import Button from "@/components/common/Button"
import ProductCard, {
  ProductCardSkeleton,
} from "@/components/products/ProductCard"
import { ProductProvider } from "@/lib/context/product-context"
import { useProducts } from "medusa-react"
import { sendGAEvent } from "@next/third-parties/google"

type Props = {}

const HomeProducts = (props: Props) => {
  // const { products } = await medusaClient.products.list().catch((err) => {
  //   notFound()
  // })

  const sales_channel = process.env.NEXT_PUBLIC_SALES_CHANNEL_ID || ""
  const { isLoading, products } = useProducts({
    limit: 3,
    sales_channel_id: [sales_channel],
  })

  return (
    <section
      id="top-products"
      className="grid lg:grid-cols-[25%_1fr] grid-cols-1 items-center gap-2"
    >
      <div className="flex flex-col gap-4">
        <h2 className="font-semibold text-heading4">{topProduct.heading}</h2>
        <p className="text-caption2 text-gray mb-2">{topProduct.description}</p>
        <Button
          variant="fill"
          color="black"
          className="w-max !rounded-full"
          as="a"
          href="/products"
          onClick={() =>
            sendGAEvent({
              event: "click_explore_products",
              value: "home/top_products/explore_products",
            })
          }
        >
          {topProduct.actionBtn}
        </Button>
      </div>
      {isLoading && (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
          {Array(3)
            .fill("")
            .map((_, index) => {
              return <ProductCardSkeleton key={index} />
            })}
        </div>
      )}

      {products && !products.length && (
        <div className="grid place-items-center capitalize w-full h-full bg-greenLight rounded-xl mx-4">
          <p>Opps.. No Any Products Available At The Moment</p>
        </div>
      )}
      {products && products.length > 0 && (
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
          {products &&
            products.map((product) => (
              <ProductProvider key={product.id} product={product}>
                <ProductCard key={product.id} product={product} />
              </ProductProvider>
            ))}
        </div>
      )}
    </section>
  )
}

export default HomeProducts

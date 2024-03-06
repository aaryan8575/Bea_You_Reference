import ProductDetails from "@/components/products/ProductDetails"
import ProductOverviewImage from "@/components/products/ProductOverviewImage"
import { ProductProvider } from "@/lib/context/product-context"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import ProductReviews from "../ProductReviews"
import RelatedProduct from "../RelatedProduct"
import ShareBtn from "@/components/common/ShareBtn"

type ProductTemplateProps = {
  product: PricedProduct
  reviewData?: any
}

const ProductOverview = ({ product, reviewData }: ProductTemplateProps) => {
  return (
    <>
      <ProductProvider product={product}>
        <section className="relative sm:mt-0 mt-4 grid md:grid-cols-2 items-start grid-cols-1 flex-1 gap-5 lg:gap-20">
          <div className="h-max md:sticky top-[100px]">
            <div className="flex items-start justify-between md:hidden">
              <h3 className="font-bold mb-4">{product.title}</h3>
              <ShareBtn pathname={`/products/${product.handle}`} />
            </div>
            <ProductOverviewImage
              productImagesData={[
                {
                  id: `${product.title}-thumbnail`,
                  url: product?.thumbnail,
                },
                ...product.images,
              ]}
            />
          </div>
          <div>
            <ProductDetails product={product} />
          </div>
        </section>
        <RelatedProduct productDetailData={product} />
        <ProductReviews product={product} reviewData={reviewData} />
      </ProductProvider>
    </>
  )
}

export default ProductOverview

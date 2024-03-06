import Image from "next/image"
import AddToCartBtn from "../AddToCartBtn"
import Button from "@/components/common/Button"
import Price from "@/components/Price"
import ReactMarkdown from "react-markdown"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { ProductProvider } from "@/lib/context/product-context"
import WishlistBtn from "@/components/common/WishlistBtn"
import ShareBtn from "@/components/common/ShareBtn"

type ProductTemplateProps = {
  product: PricedProduct
}

const ProductModal = ({ product }: ProductTemplateProps) => {
  return (
    <ProductProvider product={product}>
      <div className="grid w-full max-w-2xl lg:max-w-3xl grid-cols-1 sm:grid-cols-2 rounded-md gap-8 overflow-hidden">
        <div className="relative w-full aspect-square">
          {product?.thumbnail && (
            <Image
              src={product?.thumbnail}
              alt={product?.title || "image"}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 639px) 100vw, 50vw"
            />
          )}
        </div>
        <div className="flex flex-col justify-between gap-4">
          <span className="font-bold text-heading4 line-clamp-1">
            {product?.title}
          </span>
          <span className="line-clamp-3">
            <ReactMarkdown>{product?.description}</ReactMarkdown>
          </span>
          <div className="flex items-center gap-4">
            <Price id={product.id as string} />
            <WishlistBtn product_id={product.id!} item={product} />
            <div className="lg:hidden">
              <ShareBtn pathname={`/products/${product.handle}`} />
            </div>
          </div>
          {/* <Rating rating={data.rating} reviewCount={data.reviewCount} /> */}
          <div className="flex items-center gap-2 w-full flex-wrap">
            <div className="flex-1 flex flex-col w-full">
              <AddToCartBtn product={product} />
            </div>
            <div className="flex-1">
              <Button
                as="a"
                variant="fill"
                color="green"
                href={`/products/${product?.handle}`}
              >
                More Details
              </Button>
            </div>
            <div className="max-lg:hidden">
              <ShareBtn pathname={`/products/${product.handle}`} />
            </div>
          </div>
        </div>
      </div>
    </ProductProvider>
  )
}

export default ProductModal

import AddToCartBtn from "../AddToCartBtn"
import Price from "@/components/Price"
import ReactMarkdown from "react-markdown"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import style from "./productDetails.module.css"
import WishlistBtn from "@/components/common/WishlistBtn"
import ShareBtn from "@/components/common/ShareBtn"
type ProductTemplateProps = {
  product: PricedProduct
}

const ProductDetails = ({ product }: ProductTemplateProps) => {
  return (
    <div className="flex flex-col justify-between gap-4">
      <div className="flex items-center justify-between max-md:hidden ">
        <h3 className="font-bold mb-0">{product?.title}</h3>
        <ShareBtn pathname={`/products/${product.handle}`} />
      </div>
      <p className="font-bold text-body2">{product?.subtitle}</p>
      <div className="flex gap-4 items-center">
        <Price id={product.id as string} />
        <WishlistBtn product_id={product.id!} item={product} />
      </div>
      {/* <Rating reviewCount={5} rating={3} /> */}
      <div>
        {product.variants?.map((variant) => {
          return (
            <>
              {variant.options?.map((option, index) => {
                return (
                  <p key={option.id} className="flex flex-wrap gap-2">
                    <span className="font-bold capitalize">
                      {product?.options && product?.options[index].title}:
                    </span>
                    <span>{option.value}</span>
                  </p>
                )
              })}
            </>
          )
        })}
        <p className="flex flex-wrap gap-2">
          <span className="font-bold">Category: </span>
          {product?.categories?.map((category) => {
            return <span key={category.id}>{category.name}</span>
          })}
        </p>
      </div>
      <AddToCartBtn product={product} />
      <div className={`${style.prose} prose`}>
        <ReactMarkdown>{product?.description}</ReactMarkdown>
      </div>
      {product.metadata &&
        Object.entries(product?.metadata).map(([key, value]) => (
          <span key={key} className="flex flex-wrap gap-2">
            {/* <p className="font-bold uppercase">{key}:</p> */}
            <div className={`${style.prose} prose`}>
              <ReactMarkdown>{value}</ReactMarkdown>
            </div>
          </span>
        ))}
    </div>
  )
}

export default ProductDetails

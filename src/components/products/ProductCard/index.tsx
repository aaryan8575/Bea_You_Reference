import Image from "next/image"
import styles from "./productCard.module.css"
import AddToCartBtn from "../AddToCartBtn"
import Price from "@/components/Price"
import Link from "next/link"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import WishlistBtn from "@/components/common/WishlistBtn"

type ProductTemplateProps = {
  product: PricedProduct
}

export const ProductCardSkeleton = () => {
  return (
    <div className={`${styles.main} select-none animate-pulse`}>
      <div className={styles.productWrapper}>
        <div className={`${styles.productImage} bg-gray/50`}></div>
        <div className={`${styles.content} w-full`}>
          <p
            className={`${styles.productName} bg-gray/50 h-5 w-[80%] mb-2`}
          ></p>
          <p
            className={`${styles.productName} bg-gray/50 h-8 block w-[50%] mb-2`}
          ></p>
        </div>
      </div>
      {/* <div className={Styles.btnWrapper}>
        <p className={Styles.productName}>+</p>
      </div> */}
    </div>
  )
}

const ProductCard = ({ product }: ProductTemplateProps) => {
  return (
    <div className={styles.main}>
      <div className={styles.productWrapper}>
        <div className={styles.productImage}>
          <div className="absolute top-2 right-2 z-10">
            <WishlistBtn product_id={product.id!} item={product} />
          </div>
          <Link
            scroll={false}
            href={`/products/${product?.handle}`}
            className="relative w-full h-full block"
          >
            {product?.thumbnail && (
              <Image
                src={product?.thumbnail}
                alt={product?.title || "image"}
                priority
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                style={{ objectFit: "cover" }}
              />
            )}
          </Link>
        </div>
        <div className={styles.content}>
          <h3 className={styles.productName}>{product?.title}</h3>
          <Price id={product.id as string} />
        </div>
      </div>
      <div className={styles.btnWrapper}>
        <AddToCartBtn type="icon" product={product} />
      </div>
    </div>
  )
}

export default ProductCard

import { ProductCardSkeleton } from "@/components/products/ProductCard"

const ProductsGridSkeleton = () => {
  return (
    <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
    </section>
  )
}

export default ProductsGridSkeleton

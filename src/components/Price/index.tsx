"use client"
import { useProductActions } from "@/lib/context/product-context"
import useProductPrice from "@/lib/hooks/use-product-price"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { useMemo } from "react"

type Props = {
  id: string
}

const Price = ({ id }: Props) => {
  const { variant } = useProductActions()

  const price = useProductPrice({
    id: id,
    variantId: variant?.id,
  })

  const selectedPrice = useMemo(() => {
    const { variantPrice, cheapestPrice } = price

    return variantPrice || cheapestPrice || null
  }, [price])

  return (
    <>
      <p className="text-green-800 text-heading6">
        {selectedPrice?.calculated_price || "--"}
      </p>
      {selectedPrice?.calculated_price !== selectedPrice?.original_price && (
        <p className="flex gap-2 !text-body2">
          <span className="line-through">
            {selectedPrice?.original_price || "--"}
          </span>
          <span className="text-green-800 font-semibold">
            {selectedPrice?.percentage_diff}% off
          </span>
        </p>
      )}
    </>
  )
}

export default Price

// <div className="flex gap-4 items-center">
//   <span className="font-bold text-body1">Price:</span>
//   <p className="font-semibold text-body1">
//     {currentPrice || originalPrice}/-
//   </p>
//   {currentPrice && originalPrice && (
//     <p className="line-through text-black text-opacity-70 text-body2">
//       {originalPrice}/-
//     </p>
//   )}
// </div>

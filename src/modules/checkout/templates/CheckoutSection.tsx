"use client"
import CheckoutForm from "./checkout-form"
import CheckoutSummary from "./checkout-summary"
import { useCart } from "medusa-react"
import CartIcon from "@/public/icons/cart.svg"
import ChevronDown from "@/modules/common/icons/chevron-down"
import Link from "next/link"
import LoadingSpinner from "@/components/common/LoadingSpinner"

const CheckoutSection = () => {
  const { cart } = useCart()

  if (!cart?.items.length) {
    return (
      // <div className="flex flex-col gap-4 items-center justify-center h-full bg-gray/5 rounded-lg py-40">
      //   <span>
      //     <CartIcon className="w-8 h-8" />
      //   </span>
      //   <p>Your cart is empty</p>
      //   <a href="/products" className="text-blue-600">
      //     Continue Shopping
      //   </a>
      // </div>
      <div className="flex flex-col h-[calc(100vh-80px)] gap-4 items-center justify-center">
        <span>
          <LoadingSpinner />
        </span>
        <span>Loading...</span>
      </div>
    )
  }
  return (
    <>
      <div className="h-16 bg-white">
        <nav className="flex items-center h-full justify-between content-container border-b">
          <a
            href="/cart"
            // scroll={false}
            className="text-small-semi text-gray-700 flex items-center gap-x-2 uppercase flex-1 basis-0"
          >
            <>
              <ChevronDown className="rotate-90" size={16} />
              <span className="mt-px hidden small:block text-caption2 uppercase">
                Back to Shopping Cart
              </span>
              <span className="mt-px block small:hidden">Back</span>
            </>
          </a>

          <div className="flex-1 basis-0" />
        </nav>
      </div>
      <div className="grid grid-cols-1 small:grid-cols-[1fr_416px] content-container gap-x-40 py-12">
        <CheckoutForm />
        <CheckoutSummary />
      </div>
    </>
  )
}

export default CheckoutSection

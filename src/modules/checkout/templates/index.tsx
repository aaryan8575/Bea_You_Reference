import { CheckoutProvider } from "@/lib/context/checkout-context"
import ChevronDown from "@/modules/common/icons/chevron-down"
import Link from "next/link"
import CheckoutLoader from "../components/checkout-loader"
import SubmitSpinner from "../components/submit-spinner"
import CheckoutSection from "./CheckoutSection"

const CheckoutTemplate = () => {
  return (
    <CheckoutProvider>
      <section className="bg-white relative small:min-h-screen">
        <SubmitSpinner />
        {/* <div className="h-16 bg-white">
          <nav className="flex items-center h-full justify-between content-container border-b">
            <Link
              href="/cart"
              scroll={false}
              className="text-small-semi text-gray-700 flex items-center gap-x-2 uppercase flex-1 basis-0"
            >
              <>
                <ChevronDown className="rotate-90" size={16} />
                <span className="mt-px hidden small:block text-caption2 uppercase">
                  Back to Shopping Cart
                </span>
                <span className="mt-px block small:hidden">Back</span>
              </>
            </Link>

            <div className="flex-1 basis-0" />
          </nav>
        </div> */}
        <div className="relative">
          <CheckoutLoader />
          <CheckoutSection />
        </div>
      </section>
    </CheckoutProvider>
  )
}

export default CheckoutTemplate

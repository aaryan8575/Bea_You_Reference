import medusaRequest from "@/lib/medusa-fetch"
import OrderDetailsTemplate from "@/modules/order/templates/order-details-template"
import ChevronLeft from "@/public/icons/chevron-left.svg"
import { Metadata } from "next"
import Link from "next/link"

type Props = {
  params: { id: string }
}

async function getOrder(id: string) {
  const res = await medusaRequest(
    "GET",
    `/orders/${id}?expand=billing_address,shipping_address,items,payments,region,shipping_methods,discounts,customer,fulfillments,shipping_methods.shipping_option`
  )

  if (!res.ok) {
    throw new Error(`Failed to fetch order: ${id}`)
  }

  return res.body
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { order } = await getOrder(params.id)

  return {
    title: `Order #${order.id}`,
    description: `View your order`,
  }
}

export default async function CollectionPage({ params }: Props) {
  const { order } = await getOrder(params.id)

  return (
    <>
      <div className="px-container h-fit pt-8">
        <div className="bg-white p-4 pb-0">
          <nav className="flex items-center h-full justify-between content-container border-b pb-2">
            <Link
              href="/"
              className="text-small-semi text-gray-700 flex items-center gap-x-2 uppercase flex-1 basis-0"
            >
              <>
                <ChevronLeft className="w-5" />
                <span className="mt-px text-caption2 uppercase">
                  Back to Home
                </span>
              </>
            </Link>
          </nav>
        </div>
      </div>
      <OrderDetailsTemplate order={order} />
    </>
  )
}

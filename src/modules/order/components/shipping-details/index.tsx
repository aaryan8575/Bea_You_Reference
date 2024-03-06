import { Order } from "@medusajs/medusa"
import Divider from "@/modules/common/components/divider"
import { formatAmount } from "medusa-react"

type ShippingDetailsProps = {
  order: Order
}

const ShippingDetails = ({ order }: ShippingDetailsProps) => {
  return (
    <div>
      <p className="flex flex-row text-heading6 py-2">Delivery</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex flex-col flex-1">
          <p className="text-caption2 font-semibold mb-1">Shipping Address</p>
          <p className="text-caption2">
            {order.shipping_address.first_name}{" "}
            {order.shipping_address.last_name}
          </p>
          <p className="text-caption2">
            {order.shipping_address.address_1}{" "}
            {order.shipping_address.address_2}
          </p>
          <p className="text-caption2">
            {order.shipping_address.postal_code}, {order.shipping_address.city}
          </p>
          <p className="text-caption2">
            {order.shipping_address.country_code?.toUpperCase()}
          </p>
        </div>

        <div className="flex flex-col flex-1">
          <p className="text-caption2 font-semibold mb-1">Billing Address</p>
          <p className="text-caption2">
            {order.billing_address?.first_name}{" "}
            {order.billing_address?.last_name}
          </p>
          <p className="text-caption2">
            {order.billing_address?.address_1}{" "}
            {order.billing_address?.address_2}
          </p>
          <p className="text-caption2">
            {order.billing_address?.postal_code}, {order.billing_address?.city}
          </p>
          <p className="text-caption2">
            {order.billing_address?.country_code?.toUpperCase()}
          </p>
        </div>

        <div className="flex flex-col w-max flex-1 ">
          <p className="text-caption2 font-semibold mb-1">Contact</p>
          <p className="text-caption2">{order.shipping_address.phone}</p>
          <p className="text-caption2">{order.email}</p>
        </div>

        <div className="flex flex-col w-max flex-1">
          <p className="text-caption2 font-semibold mb-1">Method</p>
          <p className="text-caption2">
            {order.shipping_methods[0].shipping_option.name} (
            {formatAmount({
              amount: order.shipping_methods[0].price,
              region: order.region,
            })
              .replace(/,/g, "")
              .replace(/\./g, ",")}
            )
          </p>
        </div>
      </div>
      <Divider className="mt-8" />
    </div>
  )
}

export default ShippingDetails

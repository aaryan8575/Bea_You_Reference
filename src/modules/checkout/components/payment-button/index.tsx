import Button from "@/components/common/Button"
import { useCheckout } from "@/lib/context/checkout-context"
import Spinner from "@/modules/common/icons/spinner"
import { PaymentSession } from "@medusajs/medusa"
import { OnApproveActions, OnApproveData } from "@paypal/paypal-js"
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js"
import { useElements, useStripe } from "@stripe/react-stripe-js"
import { useCart } from "medusa-react"
import React, { useCallback, useEffect, useState } from "react"
import useRazorpay, { RazorpayOptions } from "react-razorpay"

type PaymentButtonProps = {
  paymentSession?: PaymentSession | null
}

const PaymentButton: React.FC<PaymentButtonProps> = ({ paymentSession }) => {
  const { cart } = useCart()

  const notReady =
    !cart ||
    !cart.shipping_address ||
    !cart.billing_address ||
    !cart.email ||
    cart.shipping_methods.length < 1
      ? true
      : false

  switch (paymentSession?.provider_id) {
    case "stripe":
      return (
        <StripePaymentButton session={paymentSession} notReady={notReady} />
      )
    case "manual":
      return <ManualTestPaymentButton notReady={notReady} />

    case "paypal":
      return (
        <PayPalPaymentButton notReady={notReady} session={paymentSession} />
      )

    case "razorpay":
      return (
        <RazorpayPaymentButton notReady={notReady} session={paymentSession} />
      )

    default:
      return (
        <span className="text-rose-600">Please Select a payment method</span>
      )
  }
}

const StripePaymentButton = ({
  session,
  notReady,
}: {
  session: PaymentSession
  notReady: boolean
}) => {
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  )

  const { cart } = useCart()
  const { onPaymentCompleted } = useCheckout()

  const stripe = useStripe()
  const elements = useElements()
  const card = elements?.getElement("cardNumber")

  const disabled = !stripe || !elements ? true : false

  const handlePayment = async () => {
    setSubmitting(true)

    if (!stripe || !elements || !card || !cart) {
      setSubmitting(false)
      return
    }

    await stripe
      .confirmCardPayment(session.data.client_secret as string, {
        payment_method: {
          card: card,
          billing_details: {
            name:
              cart.billing_address.first_name +
              " " +
              cart.billing_address.last_name,
            address: {
              city: cart.billing_address.city ?? undefined,
              country: cart.billing_address.country_code ?? undefined,
              line1: cart.billing_address.address_1 ?? undefined,
              line2: cart.billing_address.address_2 ?? undefined,
              postal_code: cart.billing_address.postal_code ?? undefined,
              state: cart.billing_address.province ?? undefined,
            },
            email: cart.email,
            phone: cart.billing_address.phone ?? undefined,
          },
        },
      })
      .then(({ error, paymentIntent }) => {
        if (error) {
          const pi = error.payment_intent

          if (
            (pi && pi.status === "requires_capture") ||
            (pi && pi.status === "succeeded")
          ) {
            onPaymentCompleted()
          }

          setErrorMessage(error.message)
          return
        }

        if (
          (paymentIntent && paymentIntent.status === "requires_capture") ||
          paymentIntent.status === "succeeded"
        ) {
          return onPaymentCompleted()
        }

        return
      })
      .finally(() => {
        setSubmitting(false)
      })
  }

  return (
    <>
      <Button
        variant="fill"
        color="green"
        disabled={disabled || notReady}
        onClick={handlePayment}
        isLoading={submitting}
      >
        Place order
      </Button>
      {errorMessage && (
        <div className="text-red-500 text-small-regular mt-2">
          {errorMessage}
        </div>
      )}
    </>
  )
}

const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || ""

const PayPalPaymentButton = ({
  session,
  notReady,
}: {
  session: PaymentSession
  notReady: boolean
}) => {
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  )

  const { cart } = useCart()
  const { onPaymentCompleted } = useCheckout()

  const handlePayment = async (
    _data: OnApproveData,
    actions: OnApproveActions
  ) => {
    actions?.order
      ?.authorize()
      .then((authorization) => {
        if (authorization.status !== "COMPLETED") {
          setErrorMessage(`An error occurred, status: ${authorization.status}`)
          return
        }
        onPaymentCompleted()
      })
      .catch(() => {
        setErrorMessage(`An unknown error occurred, please try again.`)
      })
      .finally(() => {
        setSubmitting(false)
      })
  }
  return (
    <PayPalScriptProvider
      options={{
        "client-id": PAYPAL_CLIENT_ID,
        currency: cart?.region.currency_code.toUpperCase(),
        intent: "authorize",
      }}
    >
      {errorMessage && (
        <span className="text-rose-500 mt-4">{errorMessage}</span>
      )}
      <PayPalButtons
        style={{ layout: "horizontal" }}
        createOrder={async () => session.data.id as string}
        onApprove={handlePayment}
        disabled={notReady || submitting}
      />
    </PayPalScriptProvider>
  )
}

const ManualTestPaymentButton = ({ notReady }: { notReady: boolean }) => {
  const [submitting, setSubmitting] = useState(false)

  const { onPaymentCompleted } = useCheckout()

  const handlePayment = () => {
    setSubmitting(true)

    onPaymentCompleted()

    setSubmitting(false)
  }

  return (
    <Button
      variant="fill"
      color="green"
      disabled={notReady}
      isLoading={submitting}
      onClick={handlePayment}
      size="large"
    >
      Place order
    </Button>
  )
}

export const RazorpayPaymentButton = ({
  session,
  notReady,
}: {
  session: PaymentSession
  notReady: boolean
}) => {
  const [disabled, setDisabled] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  )

  const { cart } = useCart()
  const { onPaymentCompleted } = useCheckout()

  const [Razorpay, isLoaded] = useRazorpay()

  useEffect(() => {
    if (!Razorpay) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }, [Razorpay])

  const handlePayment = useCallback(() => {
    if (!Razorpay || !cart) {
      return
    }

    if (cart) {
      const amountToBePaid = cart.total!
      let options: RazorpayOptions = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY!,
        amount: amountToBePaid.toString(), // 2000 paise = INR 20, amount in paisa
        name: process.env.NEXT_PUBLIC_SHOP_NAME!,
        description: process.env.NEXT_PUBLIC_SHOP_DESCRIPTION,
        order_id: session.data.id as string,
        currency: (session.data.currency as string).toUpperCase(),
        modal: {
          backdropclose: true,
          escape: true,
          handleback: true,
          confirm_close: true,
          ondismiss: () => {
            setSubmitting(false)
          },
          animation: true,
        },
        handler: (args) => {
          onPaymentCompleted()
        },
        prefill: {
          name:
            cart.billing_address.first_name +
            " " +
            cart.billing_address.last_name,
          email: cart.email,
          contact: cart.billing_address.phone!,
        },
        notes: {
          address: cart.billing_address,
          order_notes: session.data.notes,
        },
        callback_url: `${process.env.MEDUSA_BACKEND_URL}/hook/razorpay`,
        theme: {
          color: process.env.NEXT_PUBLIC_SHOP_COLOUR ?? "00000",
        },
      }
      let rzp = new Razorpay(options)
      rzp.on("payment.failed", function (response: any) {
        setErrorMessage(JSON.stringify(response.error))
      })
      rzp.on("payment.authorized", function (response: any) {})
      rzp.on("payment.captured", function (response: any) {})
      rzp.open()
    }
  }, [
    Razorpay,
    cart,
    onPaymentCompleted,
    session.data.currency,
    session.data.id,
    session.data.notes,
  ])

  useEffect(() => {
    if (isLoaded) {
      //  handlePayment();
    }
  }, [isLoaded, handlePayment])
  return (
    <>
      <Button
        variant="fill"
        color="green"
        disabled={submitting || disabled || notReady}
        onClick={handlePayment}
      >
        {submitting ? <Spinner /> : "Pay Now"}
      </Button>
      {errorMessage && (
        <div className="text-red-500 text-small-regular mt-2">
          {errorMessage}
        </div>
      )}
    </>
  )
}

export default PaymentButton

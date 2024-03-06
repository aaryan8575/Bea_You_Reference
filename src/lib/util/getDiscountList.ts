export default async function getDiscountList() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/store/discounts`
    )
    const res = await response.json()

    return res
  } catch (error) {
    console.log("ERROR DISCOUNT API:::::::::::", error)
  }
}

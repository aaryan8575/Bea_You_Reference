"use client"
import Button from "@/components/common/Button"
import Input from "@/components/common/formElements/Input"
import TextArea from "@/components/common/formElements/TextArea"
import RatingInput from "../RatingInput"
import { useForm, SubmitHandler } from "react-hook-form"
import { useAccount } from "@/lib/context/account-context"
import { createProductReview } from "@/lib/data"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import LoadingSpinner from "@/components/common/LoadingSpinner"
import Link from "next/link"
import { revalidatePath } from "next/cache"
import { useState } from "react"

type Inputs = {
  content: string
  title: string
  rating: number
}

type Props = {
  productDetailData: PricedProduct
  reviews: any
}

const ProductReviewForm = ({ productDetailData, reviews }: Props) => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>()

  const { customer, retrievingCustomer } = useAccount()
  const [reviewList, setReviewList] = useState(reviews)

  const isReviewAdded = reviewList?.find(
    (x) => x?.customer_id === customer?.id && x.status !== "declined"
  )

  const onSubmit: SubmitHandler<Inputs> = async ({
    content,
    title,
    rating,
  }: {
    content: string
    title: string
    rating: number
  }) => {
    try {
      const data = {
        content,
        title,
        customer_id: customer?.id,
        product_id: productDetailData?.id as string,
        rating,
      }
      if (data.customer_id && data.product_id) {
        const response = await createProductReview(data)

        setReviewList((prev) => [...prev, response?.productReview])
        // setProductHandle((prev) => ({
        //   ...prev,
        //   reviews: [...prev.reviews, response?.productReview],
        // }))
      }
    } catch (error) {
      console.log("ERROR:::::", error)
    } finally {
      reset()
    }
  }

  if (retrievingCustomer) {
    return (
      <div className="h-full flex flex-col justify-center items-center gap-4">
        <LoadingSpinner />
        <span>Loading...</span>
      </div>
    )
  }

  return (
    <div>
      <h5 className="pt-8 pb-4">Leave a Review</h5>
      <>
        {customer ? (
          <>
            {isReviewAdded?.status === "pending" && (
              <p className="bg-greenLight border border-green p-4 rounded-xl">
                Your response is under review !!!!!
              </p>
            )}
            {isReviewAdded?.status === "approved" && (
              <div className="bg-greenLight border border-green text-green p-4 rounded-xl">
                <p>Your review has been added!!!</p>
              </div>
            )}
            {!isReviewAdded && (
              <>
                <form
                  className="flex flex-col gap-6"
                  onSubmit={handleSubmit(onSubmit)}
                  // onSubmit={(e) => {
                  //   e.preventDefault()
                  //   handleSubmit(onSubmit)()
                  // }}
                >
                  <RatingInput control={control} name={"rating"} />

                  <Input
                    placeholder="Enter Title"
                    type="text"
                    errors={errors}
                    {...register("title", {
                      required: {
                        message: "title is required...",
                        value: true,
                      },
                      maxLength: {
                        value: 50,
                        message: "title is too long",
                      },
                      minLength: {
                        value: 2,
                        message: "title is too short",
                      },
                    })}
                  />
                  <TextArea
                    placeholder="Enter Your Review"
                    rows={5}
                    errors={errors}
                    autoComplete="Description"
                    {...register("content", {
                      required: {
                        message: "Review is required...",
                        value: true,
                      },
                    })}
                  />
                  <Button
                    variant="fill"
                    color="green"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    <span className="sr-only">Submit review</span>
                    {/* <SendIcon /> */}
                    {isSubmitting ? <LoadingSpinner /> : "Submit"}
                  </Button>
                </form>
              </>
            )}
          </>
        ) : (
          <div className="flex flex-col gap-4 bg-greenLight border border-green text-green p-4 rounded-xl">
            <p>Please Login to add a review</p>
            <Link
              href={"/login"}
              scroll={false}
              className="px-3 py-2 bg-green text-white rounded-md w-max duration-300 hover:scale-95"
            >
              Click to Login
            </Link>
          </div>
        )}
      </>
    </div>
  )
}

export default ProductReviewForm

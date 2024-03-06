"use client"
import React, { memo, useEffect } from "react"
import HeartIcon from "@/public/icons/heart.svg"
import Button from "@/components/common/Button"
import { useWishList } from "@/lib/context/wishlist-context"
import { useAccount } from "@/lib/context/account-context"
import { useRouter } from "next/navigation"
import { sendGAEvent } from "@next/third-parties/google"

const WishlistBtn = ({
  product_id,
  item,
}: {
  product_id: string
  item?: any
}) => {
  return null

  // const { toggleWishList, checkProductInWishList } = useWishList()
  // const { loginView, customer, retrievingCustomer } = useAccount()
  // const router = useRouter()

  // return (
  //   <>
  //     <Button
  //       onClick={() => {
  //         if (!retrievingCustomer && !customer) {
  //           return router.push("/login?q=back", { scroll: false })
  //         }
  //         toggleWishList(product_id)
  //         // const wishlistItems: GtagItemParams["items"] = [
  //         //   {
  //         //     item_id: product_id,
  //         //   },
  //         // ]
  //         // const wishlistParams: GtagItemParams = {
  //         //   currency: "INR",
  //         //   items: wishlistItems,
  //         //   value: 0,
  //         // }
  //         // if (!Boolean(checkProductInWishList(product_id)))
  //         //   mixPannel.triggerEvent("add_to_wishlist", wishlistParams)
  //       }}
  //       variant="round"
  //       id="addtofavourites"
  //       aria-label="addtofavourites"
  //       className="text-rose-500 border-none bg-rose-500 bg-opacity-10 "
  //       title="btn"
  //     >
  //       <HeartIcon
  //         width="24"
  //         height="24"
  //         fill={!Boolean(checkProductInWishList(product_id)) ? "none" : "red"}
  //       />
  //     </Button>
  //   </>
  // )
}

export default memo(WishlistBtn)

"use client"
import React, { useState } from "react"
import Button from "../Button"
import Modal from "@/modules/common/components/modal"
import ReturnModal from "../ReturnModal"
import { LineItem } from "@medusajs/medusa"

type Props = {
  item: LineItem
  order_id: string
}

const ReturnItem = ({ item, order_id }: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false)

  const closeModal = () => {
    setShowModal(false)
  }

  const openModal = () => {
    setShowModal(true)
  }

  // const removeItem = () => {
  //   removeAddress()
  //   setShowModal(false)
  // }

  const itemId = item.id
  const orderId = order_id
  const itemQuantity = item.quantity

  return (
    <div>
      <Button
        className="min-w-[200px] !py-1 bg-greenLight text-green border border-green"
        onClick={openModal}
      >
        Return Product
      </Button>
      <ReturnModal
        reasons={{
          order_id: orderId,
          quantity: itemQuantity,
          item_id: itemId,
        }}
        title="Are you sure you would like to return this item ?"
        button_name="Return Product"
        showModal={showModal}
        closeModal={closeModal}
      />
    </div>
  )
}

export default ReturnItem

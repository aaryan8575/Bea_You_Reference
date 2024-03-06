"use client"
import React, { useState } from "react"
import Button from "../Button"
import RemoveModal from "../RemoveModal"

type Props = {}

const CancelItem = (props: Props) => {
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
  return (
    <div>
      <Button
        className="min-w-[200px] !py-1 bg-greenLight text-green border border-green"
        onClick={openModal}
      >
        Cancel Product
      </Button>
      <RemoveModal
        title="Cancel Product?"
        description="Are you sure you would like to cancel this item ?"
        button_name="Cancel Product"
        showModal={showModal}
        closeModal={closeModal}
        // removeItem={removeItem}
      />
    </div>
  )
}

export default CancelItem

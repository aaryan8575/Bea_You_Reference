import Button from "@/components/common/Button"
import Modal from "@/modules/common/components/modal"
import React from "react"
import ReasonsModal from "../ReasonsModal"

type Props = {
  showModal: boolean
  closeModal: () => void
  removeItem: () => void
  title: string
  description: string
  button_name: string
}

const RemoveModal = ({
  showModal,
  closeModal,
  removeItem,
  title,
  button_name,
  description,
}: Props) => {
  return (
    <Modal size="small" isOpen={showModal} close={closeModal}>
      <p className="text-heading5 mb-4">{title}</p>
      <p className="text-caption1 text-gray-500">{description}</p>
      <div className="mt-4 flex gap-4 items-center flex-wrap">
        <Button variant="fill" color="green" className="" onClick={closeModal}>
          Cancel
        </Button>
        <Button
          variant="fill"
          className="!bg-rose-200 !text-rose-900 duration-300"
          onClick={removeItem}
        >
          {button_name}
        </Button>
      </div>
    </Modal>
  )
}

export default RemoveModal

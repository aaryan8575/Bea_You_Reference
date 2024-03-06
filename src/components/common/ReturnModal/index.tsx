import Button from "@/components/common/Button"
import Modal from "@/modules/common/components/modal"
import React from "react"
import ReasonsModal, { ReasonsProps } from "../ReasonsModal"

type Props = {
  showModal: boolean
  closeModal: () => void
  removeItem: () => void
  reasons: ReasonsProps
}

const ReturnModal = ({ showModal, closeModal, removeItem, reasons }: Props) => {
  return (
    <Modal size="small" isOpen={showModal} close={closeModal}>
      <ReasonsModal {...reasons} closeModal={closeModal} />
    </Modal>
  )
}

export default ReturnModal

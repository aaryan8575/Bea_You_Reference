"use client"
import { toast } from "react-toastify"
import Button from "../Button"
import Share from "@/public/icons/share.svg"

type Props = {
  pathname: string
}

const ShareBtn = ({ pathname }: Props) => {
  const handleShareClick = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Share this page",
          text: "Check out this page!",
          url: pathname,
        })
        .then(() => console.log("Share successful"))
        .catch((error) => console.error("Error while sharing", error))
    } else {
      console.warn("Web Share API not supported in this browser")
      const base = process.env.NEXT_PUBLIC_BASE_URL
      const link = `${base}${pathname}`
      window.navigator.clipboard.writeText(link)
      toast.success("link copied")
    }
  }
  return (
    <Button
      onClick={handleShareClick}
      variant="round"
      className="aspect-square px-2 py-2"
    >
      <Share className="w-6" />
    </Button>
  )
}

export default ShareBtn

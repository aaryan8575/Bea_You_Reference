import Link from "next/link"
import { ArrowUpRightMini } from "@medusajs/icons"
import { Text } from "@medusajs/ui"

type InteractiveLinkProps = {
  href: string
  children?: React.ReactNode
  onClick?: () => void
}

const InteractiveLink = ({
  href,
  children,
  onClick,
  ...props
}: InteractiveLinkProps) => {
  return (
    <Link
      className="flex gap-x-1 items-center group underline"
      href={href}
      onClick={onClick}
      {...props}
    >
      <Text className="text-caption1">{children}</Text>
      <ArrowUpRightMini className="group-hover:rotate-45 ease-in-out duration-150 " />
    </Link>
  )
}

export default InteractiveLink

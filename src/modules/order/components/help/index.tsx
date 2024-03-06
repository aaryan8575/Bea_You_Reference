import { Heading } from "@medusajs/ui"
import Link from "next/link"
import React from "react"
import UnderlineLink from "@/modules/common/components/interactive-link"

const Help = () => {
  return (
    <div className="mt-6">
      <Heading className="text-base-semi">Need help?</Heading>
      <div className="text-base-regular my-2">
        <ul className="gap-y-2 flex flex-col">
          <li>
            <UnderlineLink href="/contact-us">Contact</UnderlineLink>
          </li>
          {/* <li>
            <Link href="/contact">Returns & Exchanges</Link>
          </li> */}
        </ul>
      </div>
    </div>
  )
}

export default Help

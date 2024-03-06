import Banner from "@/components/common/Banner"
import React from "react"
import { termsPageBanner } from "@/lib/constData"

type Props = {}

const TermsBanner = (props: Props) => {
  return <Banner data={termsPageBanner} />
}

export default TermsBanner

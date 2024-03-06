import Banner from "@/components/common/Banner"
import React from "react"
import { privacyPolicyBanner } from "@/lib/constData"

type Props = {}

const PrivacyPolicyBanner = (props: Props) => {
  return (
    <>
      <Banner data={privacyPolicyBanner} />
    </>
  )
}

export default PrivacyPolicyBanner

import PrivacyPolicy from "@/containers/PrivacyPolicy"
import PrivacyPolicyBanner from "@/containers/PrivacyPolicyBanner"
import React from "react"

type Props = {}

const page = (props: Props) => {
  return (
    <>
      <PrivacyPolicyBanner />
      <PrivacyPolicy />
    </>
  )
}

export default page

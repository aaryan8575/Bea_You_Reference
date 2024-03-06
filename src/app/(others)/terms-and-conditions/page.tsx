import Terms from "@/containers/Terms"
import TermsBanner from "@/containers/TermsBanner"
import React from "react"

type Props = {}

const page = (props: Props) => {
  return (
    <>
      <TermsBanner />
      <Terms />
    </>
  )
}

export default page

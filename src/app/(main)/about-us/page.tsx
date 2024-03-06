import AboutUsBanner from "@/containers/AboutUsBanner"
import AboutUsDescription from "@/containers/AboutUsDescription"
import TestimonialCarousel from "@/containers/TestimonialCarousel"
import WhyChooseUs from "@/containers/WhyChooseUs"
import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: "About Us",
  description: "About our Bea You",
}

const page = () => {
  return (
    <>
      <AboutUsBanner />
      <AboutUsDescription />
      <WhyChooseUs />
      <TestimonialCarousel />
    </>
  )
}

export default page

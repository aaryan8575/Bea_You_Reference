import BannerCarousel from "@/components/common/BannerCarousel"
import Deals from "@/containers/Deals"
import HomeBanner from "@/containers/HomeBanner"
import HomeProducts from "@/containers/HomeProducts"
import TestimonialCarousel from "@/containers/TestimonialCarousel"
import WhyChooseUs from "@/containers/WhyChooseUs"
import { Metadata } from "next"

export const metadata: Metadata = {
  description:
    "High-performance ecommerce store built with Next.js, Vercel, and Medusa.",
  openGraph: {
    type: "website",
  },
}

export default async function Home() {
  return (
    <>
      <HomeBanner />
      <HomeProducts />
      <WhyChooseUs />
      <TestimonialCarousel />
      <Deals />
    </>
  )
}

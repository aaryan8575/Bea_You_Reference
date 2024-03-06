"use client"
import Button from "@/components/common/Button"
import React from "react"
import { BannerCarouselData } from "@/lib/constData"
import Styles from "./bannercarousel.module.css"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-fade"
type Props = {}

const BannerCarousel = ({ data }: { data: any }) => {
  return (
    <section className={Styles.gridSection}>
      <div className={Styles.contentWrapper}>
        <div className={Styles.content}>
          <h2 className={Styles.heading}>{data.heading}</h2>
          {data.description && (
            <h3 className={Styles.description}>
              &quot;{data.description}&quot;
            </h3>
          )}
        </div>
        <div className={Styles.bannerButtons}>
          {data.actionBtn1 && (
            <Button
              variant="fill"
              color="yellow"
              as="a"
              href={"#top-products"}
              className="!rounded-full"
            >
              {data.actionBtn1}
            </Button>
          )}
          {data.actionBtn2 && (
            <Button
              variant="outlined"
              color="light"
              as="a"
              href={"/products"}
              className="!rounded-full"
            >
              {data.actionBtn2}
            </Button>
          )}
        </div>
      </div>
      <Swiper
        effect="fade"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, EffectFade]}
        className="w-full"
      >
        {BannerCarouselData.backgroundBannerImage.map((item) => {
          return (
            <SwiperSlide className={Styles.backgroundBannerImage} key={item.id}>
              <Image
                src={item.url}
                alt={"Banner Image"}
                fill
                style={{ objectFit: "contain" }}
                className="z-10"
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default BannerCarousel

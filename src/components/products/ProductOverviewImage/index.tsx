/* eslint-disable react/jsx-no-duplicate-props */
"use client"
import { memo, useEffect, useRef, useState } from "react"
import clsx from "clsx"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Navigation, Thumbs } from "swiper/modules"
import NextIcon from "@/public/icons/chevron-right.svg"
import PrevIcon from "@/public/icons/chevron-left.svg"
import X from "@/public/icons/cancel.svg"
import { Dialog } from "@headlessui/react"
import style from "./productOverviewImage.module.css"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import Button from "@/components/common/Button"

type ProductOverviewImageProps = {
  productImagesData: Array<{
    id: string
    created_at?: Date
    updated_at?: Date
    deleted_at?: Date
    url: string
    metadata?: unknown
  }>
}

const ProductOverviewImage = ({
  productImagesData,
}: ProductOverviewImageProps) => {
  // const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [open, setOpen] = useState<boolean>(false)

  const [currentIndex, setCurrentIndex] = useState<number | null>(0)
  const swiperRef = useRef(null)
  const mainSwiperRef = useRef(null)

  const handleImagePopup = (url: string) => {
    setOpen(true)
  }

  const handleClosePopup = () => {
    setOpen(false)
  }

  const handleSlideChange = (swiper) => {
    console.log(swiper.activeIndex)

    setCurrentIndex(swiper.activeIndex)
  }

  useEffect(() => {
    const goToSlide = () => {
      if (
        swiperRef.current &&
        swiperRef.current.swiper &&
        !isNaN(currentIndex)
      ) {
        swiperRef.current.swiper.slideTo(currentIndex)
      }
      if (
        mainSwiperRef.current &&
        mainSwiperRef.current.swiper &&
        !isNaN(currentIndex)
      ) {
        mainSwiperRef.current.swiper.slideTo(currentIndex)
      }
    }

    goToSlide()
  }, [open, currentIndex])

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClosePopup}
        as="div"
        className="fixed top-0 left-0 w-screen h-screen bg-black/40 backdrop-blur-sm z-50 p-4 animate-opacity flex items-center justify-center"
      >
        <Dialog.Panel className="relative max-sm:w-full sm:h-full max-w-5xl mx-auto md:p-[4%] aspect-square">
          <div className="absolute -top-0 -right-0 md:top-5 md:right-5 translate-x-1/2 -translate-y-1/2 z-10">
            <Button
              variant="round"
              onClick={handleClosePopup}
              className={"bg-white"}
            >
              <X className="w-6 h-6" />
            </Button>
          </div>
          <div className="relative h-full w-full">
            <Swiper
              ref={swiperRef}
              spaceBetween={10}
              navigation={true}
              // thumbs={{ swiper: thumbsSwiper }}

              onSlideChange={handleSlideChange}
              navigation={{
                prevEl: ".productPopupCarouselPrevBtn",
                nextEl: ".productPopupCarouselNextBtn",
              }}
              initialSlide={currentIndex || 0}
              modules={[FreeMode, Navigation, Thumbs]}
              className="w-full h-full rounded-md"
            >
              {productImagesData?.map((item, index) => {
                return (
                  <SwiperSlide key={item.id}>
                    <Image
                      src={item.url}
                      fill
                      style={{ objectFit: "cover" }}
                      alt="productimage"
                      priority={true}
                      sizes="100vw"
                    />
                  </SwiperSlide>
                )
              })}
            </Swiper>
            <button
              type="button"
              className="productPopupCarouselPrevBtn swiper-custom-navigation-btn disabled:bg-gray/30 !bg-opacity-100 !text-white left-0 -translate-y-1/2 -translate-x-1/2"
            >
              <PrevIcon className="w-6 aspect-square" />
              <span className="sr-only">Previous button</span>
            </button>
            <button
              type="button"
              className="productPopupCarouselNextBtn swiper-custom-navigation-btn disabled:bg-gray/30 !bg-opacity-100 !text-white right-0 -translate-y-1/2 translate-x-1/2"
            >
              <NextIcon className="w-6 aspect-square" />
              <span className="sr-only">Next Button</span>
            </button>
          </div>
        </Dialog.Panel>
      </Dialog>
      <div className={style.mainwrapper}>
        <div className="relative w-full aspect-[4/3] px-1 sm:px-2">
          <Swiper
            ref={mainSwiperRef}
            spaceBetween={10}
            navigation={true}
            // thumbs={{ swiper: thumbsSwiper }}
            navigation={{
              prevEl: ".productCarouselPrevBtn",
              nextEl: ".productCarouselNextBtn",
            }}
            onSlideChange={handleSlideChange}
            modules={[FreeMode, Navigation, Thumbs]}
            className={style.main_image}
          >
            {productImagesData?.map((item) => {
              return (
                <SwiperSlide
                  key={item.id}
                  onClick={() => handleImagePopup(item.url)}
                >
                  <Image
                    src={item.url}
                    fill
                    style={{ objectFit: "cover" }}
                    alt="productimage"
                    priority={true}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </SwiperSlide>
              )
            })}
          </Swiper>
          <button
            type="button"
            className="productCarouselPrevBtn swiper-custom-navigation-btn left-2 -translate-y-1/2 -translate-x-1/2"
          >
            <PrevIcon className="w-6 aspect-square" />
            <span className="sr-only">Previous button</span>
          </button>
          <button
            type="button"
            className="productCarouselNextBtn swiper-custom-navigation-btn right-2 -translate-y-1/2 translate-x-1/2"
          >
            <NextIcon className="w-6 aspect-square" />
            <span className="sr-only">Next Button</span>
          </button>
        </div>
        <div className={`noScrollbar`}>
          <Swiper
            // onSwiper={setThumbsSwiper}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper relative w-full flex"
          >
            {productImagesData?.map((item, index) => {
              return (
                <SwiperSlide
                  onClick={() => {
                    setCurrentIndex(index)
                  }}
                  key={item.id}
                  className={clsx("basis-[25%] px-1 sm:px-2")}
                >
                  <div
                    className={clsx(
                      "bg-white w-full box-border border-2 border-gray/20 inline-block rounded-xl relative aspect-[4/3] hover:cursor-pointer select-none overflow-hidden",
                      { ["border-yellow/100"]: currentIndex === index }
                    )}
                  >
                    <Image
                      src={item.url}
                      fill
                      alt="images"
                      style={{ objectFit: "cover" }}
                      sizes="25vw"
                    />
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default memo(ProductOverviewImage)

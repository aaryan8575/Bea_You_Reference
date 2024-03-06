import Image from "next/image"
import React from "react"
import style from "./whychooseus.module.css"
import { whyChooseUs } from "@/lib/constData"
import ServiceCard from "@/components/ServiceCard"

type Props = {}

const WhyChooseUs = (props: Props) => {
  return (
    <section>
      <div className={style.container}>
        <div className={style.contentWrapper}>
          <div className={style.headingWrapper}>
            <h2 className="text-heading4">{whyChooseUs.heading}</h2>
            <p>{whyChooseUs.description}</p>
          </div>
          <div className={style.servicesWrapper}>
            {whyChooseUs &&
              whyChooseUs.services?.slice(0, 4).map((item) => {
                return <ServiceCard key={item.id} data={item} />
              })}
          </div>
        </div>
        <div className={style.imageWrapper}>
          <div className={style.image}>
            <Image
              src={whyChooseUs.image}
              alt="why choose us image"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-2xl z-10"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs

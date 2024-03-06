import Image from "next/image"
import { ServiceCardType } from "@/utils/types"
import style from "./servicecard.module.css"

const ServiceCard = ({ data }: ServiceCardType) => {
  return (
    <div className={style.service}>
      <div className={style.icon}>
        <Image src={data.icon} alt={data.heading} fill sizes="25vw" />
      </div>
      <h3 className="font-semibold text-body2 !mb-0">{data.heading}</h3>
      <p className={style.serviceDescription} title={data.serviceDescription}>
        {data.serviceDescription}
      </p>
    </div>
  )
}

export default ServiceCard

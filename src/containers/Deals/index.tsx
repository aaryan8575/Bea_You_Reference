import { DealsData } from "@/lib/constData"
import DealCard from "@/components/DealCard"
import getDiscountList from "@/lib/util/getDiscountList"

type DealProps = {
  id: string
  ends_at: string
  is_disabled: boolean
  deleted_at: string
  code: string
  metadata: {
    title: string
    thumbnail: string
  }
}

const Deals = async () => {
  const { discounts } = await getDiscountList()

  const availableCodes = discounts?.reduce((p: DealProps, c: DealProps) => {
    let dealActive = true

    if (c.ends_at) {
      dealActive =
        Date.parse(c.ends_at) - Date.parse(new Date().toISOString()) > 0
          ? true
          : false
    }

    if (!c.is_disabled && !c.deleted_at && dealActive) {
      return [
        ...p,
        {
          id: c.id,
          code: c.code,
          title: c.metadata.title,
          thumbnail: c.metadata.thumbnail,
        },
      ]
    }
    return p
  }, [])

  return (
    <section>
      <div className="flex flex-col gap-4">
        <h2 className="font-semibold text-heading4 text-center">
          {DealsData.heading}
        </h2>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
          {availableCodes.slice(0, 3)?.map((item) => (
            <DealCard deal={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Deals

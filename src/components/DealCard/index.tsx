import Image from "next/image"
import Link from "next/link"

type DealsTemplateProps = {
  id: string
  thumbnail: string
  title: string
  code: string
}

const DealCard = ({ deal }: { deal: DealsTemplateProps }) => {
  return (
    <div className="flex flex-col gap-4">
      <Link
        href={`/products?code=${deal.code!}`}
        className="relative aspect-[4/3] w-full rounded-xl overflow-hidden"
      >
        <Image src={deal.thumbnail} alt="deal" fill className="object-cover" />
      </Link>
      <div className="text-center  font-bold">
        <h3 className="text-body2 font-bold">{deal.title}</h3>
      </div>
    </div>
  )
}

export default DealCard

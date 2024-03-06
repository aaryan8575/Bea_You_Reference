import Banner from "@/components/common/Banner"
import BannerCarousel from "@/components/common/BannerCarousel"
import { shopPageBanner } from "@/lib/constData"

const ProductsBanner = () => {
  return <BannerCarousel data={shopPageBanner} />
}

export default ProductsBanner

import { navbarData } from "@/lib/constData"
import DesktopNav from "./Desktopnav"

type Props = {}

const Header = (props: Props) => {
  return (
    <>
      <header className="bg-green sticky top-0 z-40">
        <DesktopNav data={navbarData} />
      </header>
    </>
  )
}

export default Header

import Link from "next/link"
import style from "./desktopnav.module.css"
import { NavLinksType } from "@/utils/types"
import AccountBtn from "../AccountBtn"
import CartBtn from "../CartBtn"
import MobileNav from "../Mobilenav"
import NavLinks from "../NavLinks"

const DesktopNav = ({ data }: { data: NavLinksType }) => {
  return (
    <div className={style.deskNav}>
      <MobileNav data={data} />

      <Link href={"/"} className={style.logoWrapper}>
        <h1>
          <span className={style.heading1}>{data.heading1}</span>
          <span className={style.heading2}>{data.heading2}</span>
        </h1>
      </Link>
      <div className={style.contentWrapper}>
        <NavLinks links={data} />

        <div className={style.icons}>
          <AccountBtn />
          <CartBtn />
        </div>
      </div>
    </div>
  )
}

export default DesktopNav

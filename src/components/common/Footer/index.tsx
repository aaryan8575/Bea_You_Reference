import { footerData } from "@/lib/constData"
import Link from "next/link"
import SocialIcons from "@/components/SocialIcons"
import Image from "next/image"
import styles from "./footer.module.css"
import NewsLetter from "@/components/NewsLetter"

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerImageWrapper}>
        <Image
          fill
          src={footerData.footerImage}
          alt="footer image"
          className="object-contain"
        />
      </div>
      {/* newsletter */}
      <NewsLetter />
      <footer className={styles.footer}>
        <h2 className={styles.heading}>{footerData.heading}</h2>
        <div className={styles.footerDataWrapper}>
          <div className={styles.descriptionWrapper}>
            <p className={styles.description}>{footerData.description}</p>
            <SocialIcons />
          </div>
          <div className={styles.footerLinks}>
            {footerData?.footerLinks?.map((item, index) => {
              return (
                <div key={index} className={styles.footerLinkSection}>
                  {item?.map((link) => {
                    return (
                      <Link
                        key={link.id}
                        href={link.url}
                        className={styles.link}
                      >
                        {link.title}
                      </Link>
                    )
                  })}
                </div>
              )
            })}
          </div>
        </div>
        <hr className="opacity-30" />
        <div className="flex gap-2 justify-between max-md:flex-col max-md:items-center *:text-caption2">
          <p>{footerData.copyright.description}</p>
          <span className="text-caption2 flex gap-x-1 items-center flex-wrap max-sm:justify-center">
            <span>Devloped and Managed by</span>
            <Link
              className="underline text-caption2 font-bold"
              href={footerData.copyright.url}
              target="_blank"
            >
              <h3 className="sr-only">The Special Character</h3>
              {footerData.copyright.title}
            </Link>
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Footer

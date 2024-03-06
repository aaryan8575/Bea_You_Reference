import Providers from "@/modules/providers"
import { Inter } from "next/font/google"
import { GoogleAnalytics } from "@next/third-parties/google"
import "./globals.css"
import Header from "@/components/common/Header"
import Footer from "@/components/common/Footer"
import type { Viewport } from "next"
import { ToastContainer, Bounce } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {
  SITE_DESC,
  SITE_NAME,
  TWITTER_CREATER,
  TWITTER_SITE_ID,
  BASE_URL,
} from "@/lib/constants"

export const viewport: Viewport = {
  themeColor: "white",
}

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`,
  },
  robots: {
    follow: true,
    index: true,
  },
  manifest: `${BASE_URL}/manifest.json`,
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESC,
    siteId: TWITTER_SITE_ID,
    creator: TWITTER_CREATER,
    creatorId: TWITTER_SITE_ID,
    images: [`${BASE_URL}/twitter-image.jpg`], // Must be an absolute URL
  },
}

const inter = Inter({
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-inter",
  preload: true,
})

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} relative font-sans`}>
        <Providers>
          <Header />
          {children}
          {modal}
          <Footer />
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
        </Providers>
      </body>
      <GoogleAnalytics gaId="G-NZZ7D07P21" />
    </html>
  )
}

import AccountLayout from "@/modules/account/templates/account-layout"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Account",
  description: "Manage and Overview of your account activity.",
  robots: {
    follow: false,
    index: false,
  },
}

export default function AccountPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AccountLayout>{children}</AccountLayout>
}

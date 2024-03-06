"use client"

import { LOGIN_VIEW, useAccount } from "@/lib/context/account-context"
import Register from "@/modules/account/components/register"
import { redirect } from "next/navigation"
import { useEffect } from "react"
import Login from "../components/login"

const LoginTemplate = ({ query }: { query: string }) => {
  const { loginView, customer, retrievingCustomer } = useAccount()
  const [currentView, setCurrentView] = loginView

  useEffect(() => {
    if (!retrievingCustomer && customer) {
      redirect("/account")
    }
  }, [customer, retrievingCustomer])

  useEffect(() => {
    if (currentView !== LOGIN_VIEW.SIGN_IN) setCurrentView(LOGIN_VIEW.SIGN_IN)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="w-full flex justify-center p-4">
      {currentView === "sign-in" ? (
        <Login query={query} />
      ) : (
        <Register query={query} />
      )}
    </div>
  )
}

export default LoginTemplate

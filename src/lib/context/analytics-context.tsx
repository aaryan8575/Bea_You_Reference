import { PropsWithChildren, createContext, useContext, useState } from "react"

interface AnalyticsContext {
  discountCode: string | null
  storeDiscountCode: (prev: string) => void
}

export const AnalyticsContext = createContext<AnalyticsContext | null>(null)

export const AnalyticsProvider = ({ children }: PropsWithChildren) => {
  const [discountCode, setDiscountCode] = useState<string | null>(null)

  const storeDiscountCode = (code: string) => {
    return setDiscountCode(code)
  }

  return (
    <AnalyticsContext.Provider
      value={{
        discountCode,
        storeDiscountCode,
      }}
    >
      {children}
    </AnalyticsContext.Provider>
  )
}

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext)

  if (context === null) {
    throw new Error("useAnalytics must be used within a AnalyticsProvider")
  }
  return context
}

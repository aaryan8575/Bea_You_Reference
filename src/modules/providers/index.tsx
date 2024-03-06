"use client"

import { MEDUSA_BACKEND_URL, queryClient } from "@/lib/config"
import { AccountProvider } from "@/lib/context/account-context"
import { CartDropdownProvider } from "@/lib/context/cart-dropdown-context"
import { MobileMenuProvider } from "@/lib/context/mobile-menu-context"
import { StoreProvider } from "@/lib/context/store-context"
import { MedusaProvider, CartProvider } from "medusa-react"
import { Suspense } from "react"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MedusaProvider
      baseUrl={MEDUSA_BACKEND_URL}
      queryClientProviderProps={{
        client: queryClient,
      }}
    >
      <CartDropdownProvider>
        <MobileMenuProvider>
          <CartProvider>
            <Suspense fallback={null}>
              <StoreProvider>
                <AccountProvider>
                  {/* <WishListProvider> */}
                  {children}
                  {/* </WishListProvider> */}
                </AccountProvider>
              </StoreProvider>
            </Suspense>
          </CartProvider>
        </MobileMenuProvider>
      </CartDropdownProvider>
    </MedusaProvider>
  )
}

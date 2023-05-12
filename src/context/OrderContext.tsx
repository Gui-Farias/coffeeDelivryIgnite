import { ReactNode, createContext, useState } from "react"


export const OrderContext = createContext({} as any)

interface CyclesContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children, } : CyclesContextProviderProps ) {
  const [qtdCoffeeOrder, setQtdCoffeeOrder] = useState(0);

  return (
    <OrderContext.Provider value={{qtdCoffeeOrder}}>
      {children}
    </OrderContext.Provider>
  )
}

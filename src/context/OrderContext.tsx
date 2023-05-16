import { ReactNode, createContext, useEffect, useState } from "react"


export const OrderContext = createContext({} as any)

interface CyclesContextProviderProps {
  children: ReactNode
}
interface CoffeeOrderInterface {
  imgCoffee: string,
  title: string,
  price: string,
  qtdCoffee: number
}

export function OrderContextProvider({ children, } : CyclesContextProviderProps ) {
  const [qtdCoffeeOrder, setQtdCoffeeOrder] = useState(0);

  const [coffeeList, setCoffeeList] = useState<CoffeeOrderInterface[]>([])

  useEffect(() => {
    setQtdCoffeeOrder(0)
    coffeeList.forEach(coffee => {
      setQtdCoffeeOrder(state => state + +coffee.qtd)
    });
  },[coffeeList])

  return (
    <OrderContext.Provider value={{qtdCoffeeOrder,setQtdCoffeeOrder,coffeeList, setCoffeeList}}>
      {children}
    </OrderContext.Provider>
  )
}

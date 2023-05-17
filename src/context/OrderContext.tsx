import { ReactNode, createContext, useEffect, useState } from "react"


export const OrderContext = createContext({} as any)

interface CyclesContextProviderProps {
  children: ReactNode
}
interface CoffeeOrderInterface {
  imgCoffee: string,
  title: string,
  price: string,
  qtd: number
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


  function deleteCoffee(coffeeToDelete:string) {
    const coffeeListAfterDeleteOne = coffeeList.filter(coffee => {
      return coffee.title !== coffeeToDelete;
    })
    setCoffeeList(coffeeListAfterDeleteOne)
  }

  function lessCoffee(coffeeLess:string, coffeeQtd:number){
    console.log(coffeeQtd);
    
    const coffeeNewQtd = coffeeList.find((coffee) => coffee.title === coffeeLess);

    coffeeNewQtd?.qtd === 0 ?
      setCoffeeList(
        coffeeList.filter(
          coffee => coffee.title !== newCoffeeOrder.title
        )
      ) 
      : setCoffeeList(coffeeList), coffeeNewQtd.qtd = coffeeLess.qtd
  }

  function moreCoffee(coffee:string) {
    console.log(coffee);
  }

  return (
    <OrderContext.Provider value={{qtdCoffeeOrder,setQtdCoffeeOrder,coffeeList, setCoffeeList, deleteCoffee, lessCoffee, moreCoffee}}>
      {children}
    </OrderContext.Provider>
  )
}

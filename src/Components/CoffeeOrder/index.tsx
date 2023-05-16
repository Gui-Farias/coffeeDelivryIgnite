import { useContext } from 'react'
import {Trash} from '@phosphor-icons/react'

import './styles.scss'
import { OrderContext } from '../../context/OrderContext';

interface CoffeeOrderInterface {
  imgCoffee: string,
  title: string,
  price: string,
  qtdCoffee: number
}

export function CoffeeOrder() {
  const {coffeeList} = useContext(OrderContext)

  const formattedNumberToReal = (number:number) => { 
    return (number.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }))};


  function handleDeleteCoffee(coffee) {
    console.log(coffee, 'áaa');
  }


  return (
    <div className="coffee">
      {
        coffeeList.map(coffee => {
          return (
            <div className="coffee__order" key={coffee.title}>
              <img src={coffee.imgCoffee} alt="" />
              <div className="coffee__order__intro">
                <h3 className="title-h3">{coffee.title}</h3>
                <div className="coffee__buttons">
                <div className="input__buttons">
                  <button onClick={() => coffee.qtd - 1}  className='input__buttons--less'>
                    -
                  </button>
                    {coffee.qtd}
                  <button onClick={() => coffee.qtd + 1}  className='input__buttons--plus'>
                    +
                  </button>
                </div>
                  <button className='coffee__btn-trash' onClick={handleDeleteCoffee}>
                    <Trash size={16} color='#8047F8'/>
                    Remover
                  </button>
                </div>
              </div>
              <p>{formattedNumberToReal(coffee.price * coffee.qtd)}</p>
            </div>
          )
        })
      }
    </div>
  )
}

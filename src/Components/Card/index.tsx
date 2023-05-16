import { useContext, useState } from 'react'
import { OrderContext } from '../../context/OrderContext'

import { ShoppingCart } from '@phosphor-icons/react'
import './style.scss'
interface CardInterface {
  imgCoffee: string,
  tags: string[],
  title: string,
  text: string,
  price: string,
  qtd: number
}

interface CoffeeOrder {
  imgCoffee: string,
  title: string,
  price: string,
  qtd: number
}

export function Card(props:CardInterface) {
  const { setCoffeeList, coffeeList } = useContext(OrderContext)

  const [qtdCoffee, setQtdCoffee] = useState(0)
  

  function handleNewOrder() {
    const newCoffeeOrder:CoffeeOrder = {
      imgCoffee: props.imgCoffee,
      price: props.price,
      qtd: qtdCoffee,
      title: props.title
    }

    const addCoffe = () =>  {
      (!!coffeeList && newCoffeeOrder.qtd !== 0) && setCoffeeList([newCoffeeOrder])

      const coffeeNewQtd = coffeeList.find((coffee) => coffee.title === newCoffeeOrder.title)
      
      if (!coffeeNewQtd) {
        newCoffeeOrder.qtd > 0 && setCoffeeList([...coffeeList, newCoffeeOrder])
      } else {
        newCoffeeOrder.qtd === 0 ?
          setCoffeeList(
            coffeeList.filter(
              coffee => coffee.title !== newCoffeeOrder.title
            )
          ) 
          : setCoffeeList(coffeeList), coffeeNewQtd.qtd = newCoffeeOrder.qtd
      }
      setQtdCoffee(newCoffeeOrder.qtd)
    }
    addCoffe()
  }

  return (
    <div className="card">
      <img src={props.imgCoffee} alt=""  className='card__coffee-img'/>
      <p className='card__tag'>
         { props.tags.map(tag => {
           return (
            <span key={tag}>{tag}</span>
           )
          })}
      </p>
      <h3 className='card__title'>{props.title}</h3>
      <p className='card__text'>{props.text}</p>
      <div className="card__price">
        <span className="card__value">
          {props.price}
        </span>
        <div className="card__cart">
          <div className="card__buttons input__buttons">
            <button onClick={() => setQtdCoffee((qtdCoffee) => qtdCoffee - 1)} className='input__buttons--less'>
              -
            </button>
              {qtdCoffee}
            <button onClick={() => setQtdCoffee((qtdCoffee) => qtdCoffee + 1)} className='input__buttons--plus'>
              +
            </button>
          </div>

          <button className='card__buy' onClick={handleNewOrder}>
            <ShoppingCart size={22} color='#FFF' weight='fill'/>
          </button>
        </div>
      </div>
    </div>
  )
}

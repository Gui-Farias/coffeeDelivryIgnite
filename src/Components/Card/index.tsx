import { useState } from 'react'

import { ShoppingCart } from '@phosphor-icons/react'
import './style.scss'
interface CardInterface {
  imgCoffee: string,
  tags: string[],
  title: string,
  text: string,
  price: string,
}

export function Card(props:CardInterface) {
  const [qtdCoffee, setQtdCoffee] = useState(0)

  function handleNewOrder() {
    console.log(qtdCoffee, props, qtdCoffee * +props.price);
    
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
          <div className="card__buttons">
            <button onClick={() => setQtdCoffee((qtdCoffee) => qtdCoffee - 1)} className='card__buttons--less'>
              -
            </button>
              {qtdCoffee}
            <button onClick={() => setQtdCoffee((qtdCoffee) => qtdCoffee + 1)} className='card__buttons--plus'>
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

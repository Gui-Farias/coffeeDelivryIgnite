import { useState } from 'react'
import coffee01 from '../../assets/coffees/coffee01.png'
import iconShoppingCartSimple from '../../assets/iconShoppingCartSimple.png'
import './style.scss'
import { Link } from 'react-router-dom'

interface card {
  imgCoffee: string,
  tags: [],
  title: string,
  text: string,
  price: string,
}

export function Card() {
  const [qtdCoffee, setQtdCoffee] = useState(0)

  return (
    <div className="card bg-red-500">
      <img src={coffee01} alt=""  className='card__coffee-img'/>
      <p className='card__tag'>Tradicional</p>
      <h3 className='card__title'>Expresso Tradicional</h3>
      <p className='card__text'>O tradicional café feito com água quente e grãos moídos</p>
      <div className="card__price">
        <span className="card__value">
          9,90
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

          <Link to={'/checkout'}>

            <button className='card__buy'>
              <img src={iconShoppingCartSimple} alt="" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

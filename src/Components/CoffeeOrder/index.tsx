import { useState } from 'react'
import {Trash} from '@phosphor-icons/react'
import coffee01 from '../../assets/coffees/coffee01.png'

import './styles.scss'
import { Link } from 'react-router-dom';

interface CoffeeOrderInterface {
  imgCoffee: string,
  title: string,
  price: string,
  qtdCoffee: number
}

export function CoffeeOrder(props:CoffeeOrderInterface) {
  const [qtdCoffee, setQtdCoffee] = useState(props.qtdCoffee | 0);

  const [listOfCoffee, setListOfCoffee] = useState([{}]);
  console.log(listOfCoffee);
  

  return (
    <div className="coffee">
      <div className="coffee__order">
        <img src={props.imgCoffee} alt="" />
        <div className="coffee__order__intro">
          <h3 className="title-h3">{props.title}</h3>
          <div className="coffee__buttons">
            <button onClick={() => setQtdCoffee((qtdCoffee) => qtdCoffee - 1)} className='card__buttons--less'>
              -
            </button>
              {qtdCoffee}
            <button onClick={() => setQtdCoffee((qtdCoffee) => qtdCoffee + 1)} className='card__buttons--plus'>
              +
            </button>
            <button className='coffee__btn-trash'>
              <Trash size={16} color='#8047F8'/>
              Remover
            </button>
          </div>
        </div>
        <p>R${props.price}</p>
      </div>

      <div className="coffee__price">
        <p>Total de intens <span>R$29,70</span></p>
        <p>Entrega <span>R$9,00</span></p>
        <p>Total <span>R$38,70</span></p>
      </div>

      <Link to={'/success'}>
        <button className='coffee__btn'>
          Confirmar pedido
        </button>
      </Link>
    </div>
  )
}

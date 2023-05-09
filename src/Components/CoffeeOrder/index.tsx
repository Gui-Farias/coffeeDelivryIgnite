import { useState } from 'react'
import {Trash} from '@phosphor-icons/react'
import coffee01 from '../../assets/coffees/coffee01.png'

import './styles.scss'
import { Link } from 'react-router-dom';

export function CoffeeOrder() {
  const [qtdCoffee, setQtdCoffee] = useState(0);

  return (
    <div className="coffee">
      <div className="coffee__order">
        <img src={coffee01} alt="" />
        <div className="coffee__order__intro">
          <h3 className="title-h3">Latte</h3>
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
        <p>R$ 9.90</p>
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

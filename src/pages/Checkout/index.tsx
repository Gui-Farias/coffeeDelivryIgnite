import { useState } from 'react'

import { MapPinLine, CurrencyDollar } from '@phosphor-icons/react'
import { FormCheckout } from "../../Components/FormCheckout";
import './style.scss'

export function Checkout() {
  const [qtdCoffee, setQtdCoffee] = useState(0);

  return (
    <section className="checkout">
      <div className="checkout__left">

        <h2>Complete seu pedido</h2>

        <div className="checkout__complet">
          <div className="checkout__intro">
            <MapPinLine size={22} color="#C47F17"/>
            <div className="checkout__intro-text">
              <h3 className="title-h3">Endereço de entrega</h3>
              <p className="paragrapy">Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>

          <FormCheckout/>
        </div>

        <div className="checkout__payment">
          <div className="checkout__intro">
            <CurrencyDollar size={22} color="#8047F8"/>
            <div className="checkout__intro-text">
              <h3 className="title-h3">Pagamento</h3>
              <p className="paragrapy">O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </div>

        </div>
      </div>

      <div className="checkout__right">
        <h2>Cafés selecionados</h2>
        <div className="coffee">
          <div className="coffee__order">
            <img src="https://via.placeholder.com/200x200.png" alt="" />
            <div className="coffee__order__intro">
              <h3 className="title-h3">Latte</h3>
          
            <div className="card__buttons">
              <button onClick={() => setQtdCoffee((qtdCoffee) => qtdCoffee - 1)} className='card__buttons--less'>
              -
            </button>
              {qtdCoffee}
            <button onClick={() => setQtdCoffee((qtdCoffee) => qtdCoffee + 1)} className='card__buttons--plus'>
              +
            </button>
          </div>
            </div>
          </div>

          <div className="coffee__price">
            <p>Total de intens <span>R$29,70</span></p>
            <p>Entrega <span>R$9,00</span></p>
            <p>Total <span>R$38,70</span></p>
          </div>
        </div>
        <button>
          Confirmar pedido
        </button>
      </div>
    </section>
  )
}

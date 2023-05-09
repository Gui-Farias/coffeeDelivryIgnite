
import { MapPinLine, CurrencyDollar } from '@phosphor-icons/react'
import { FormCheckout } from "../../Components/FormCheckout";
import './style.scss'
import { CoffeeOrder } from '../../Components/CoffeeOrder';

export function Checkout() {

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

          <div className="checkout__options">
             <button className="checkout__option checkout__option-credit active">Cartão de crédito</button>
             <button className="checkout__option checkout__option-debito">Cartão de débito</button>
             <button className="checkout__option checkout__option-dinheiro">Cartão de dinheiro</button>
          </div>
        </div>
      </div>

      <div className="checkout__right">
        <h2>Cafés selecionados</h2>

        <CoffeeOrder />
      </div>
    </section>
  )
}

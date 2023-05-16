
import { MapPinLine, CurrencyDollar } from '@phosphor-icons/react'
import { FormCheckout } from "../../Components/FormCheckout";
import './style.scss'
import { CoffeeOrder } from '../../Components/CoffeeOrder';
import { useContext, useState } from 'react';
import { OrderContext } from '../../context/OrderContext';
import { Link } from 'react-router-dom';

export function Checkout() {
  const {coffeeList} = useContext(OrderContext)

  const [allCoffeesValue, setAllCoffeesValue] =  useState(0)

  const priceDelivery = 9

  let allCoffee = 0; 
  coffeeList.forEach(coffee => {
    allCoffee += +coffee.qtd * +coffee.price
  });

  const formattedNumberToReal = (number:number) => { 
    return (number.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }))};


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
             <button className="checkout__option checkout__option-dinheiro">Dinheiro</button>
          </div>
        </div>
      </div>

      <div className="checkout__right">
        <h2>Cafés selecionados</h2>

        <div className="checkout__order">

          {
            coffeeList.length > 0  ? (
              <CoffeeOrder />
            )
            :
            (
              <h3 className='title-h3'>Você ainda não adicionou café, Aproveite nossa loja e experimente otimos Cafés!!</h3>
            )
          }


          <div className="coffee__price">
            <p>Total de intens <span>{formattedNumberToReal(allCoffee)}</span></p>
            <p>Entrega <span>{formattedNumberToReal(priceDelivery)}</span></p>
            <p>Total <span>{formattedNumberToReal(allCoffee + priceDelivery)}</span></p>
          </div>

          {coffeeList.length > 0  ? (
            <Link to={'/success'} > 
               <button className='coffee__btn'>
                Confirmar pedido
              </button>
             </Link>
              )
              :
              <button className='coffee__btn' disabled>
                Confirmar pedido
              </button>

          }
        </div>
      </div>
    </section>
  )
}

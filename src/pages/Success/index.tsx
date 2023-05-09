import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import successImage from '../../assets/successImage.png'
import './styles.scss'

export function Success() {
  return (
    <section className="success">
      <div className="success__left">
        <h1 className='title'>
          Uhu! Pedido confirmado
        </h1>
        <p className='paragrapy'>Agora é só aguardar que logo o café chegará até você</p>

        <div className="success__box">
          <p><span> <MapPin size={16} color='#FFF' weight='fill' /> </span>Entrega em Rua João Daniel Martinelli, 102 <br />Farrapos - Porto Alegre, RS</p>
          <p><span> <Timer size={16} color='#FFF' weight='fill'/> </span> Previsão de entrega <br /> 20 min - 30 min </p>
          <p><span> <CurrencyDollar size={16} color='#FFF'/> </span> Pagamento na entrega <br/> Cartão de Crédito</p>
        </div>
      </div>
      <div className="success__right">
        <img src={successImage} alt=""  />
      </div>
    </section>
  )
}

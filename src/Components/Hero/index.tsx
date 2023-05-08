import coffeeImage from '../../assets/hero.png';
import './style.scss'

export function Hero() {
  return (
    <section className='hero'>
      <div className="hero__intro">
        <h1 className='hero__title'>Encontre o café perfeito para qualquer hora do dia</h1>
        <h3 className='hero__subtitle'>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h3>
        <ul className="hero__list">
          <li className="hero__item">Compra simples e segura</li>
          <li className="hero__item">Entrega rápida e rastreada</li>
          <li className="hero__item">Embalagem mantém o café intacto</li>
          <li className="hero__item">O café chega fresquinho até você</li>
        </ul>
      </div>
      <img src={coffeeImage} alt="Coffee beans and a drink" />
    </section>
  )
}

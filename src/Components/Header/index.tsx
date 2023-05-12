import './style.scss';
import Logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { MapPin, ShoppingCart } from '@phosphor-icons/react';

import { useState, useEffect, useContext } from 'react';
import { OrderContext } from '../../context/OrderContext';

export function Header() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 80) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const { qtdCoffeeOrder } =  useContext(OrderContext)


  return (
    <header className={`header ${isFixed ? 'fixed' : ''}`}>
      <div className="header__container">
        <Link to={'/'}>
          <img src={Logo} alt="Coffee Delivery logo" />
        </Link>

        <div className="header__options">
          <div className="header__location">
            <MapPin size={22} color='#8047F8' weight="fill" />
            <span>
              Sao Paulo, SP
            </span>
          </div>
          <Link to={'/checkout'}>
            <button className='header__btn-cart'>
              <ShoppingCart size={22} color='#C47F17' weight="fill" />
              <span>{qtdCoffeeOrder}</span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  )

}

import './style.scss';
import Logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { MapPin, ShoppingCart } from '@phosphor-icons/react';

export function Header() {
  return (
    <header className='header'>
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
          </button>
        </Link>
      </div>
    </header>
  )

}

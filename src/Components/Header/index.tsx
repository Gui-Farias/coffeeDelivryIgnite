import './style.scss';
import Logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className='header'>
      <Link to={'/'}>
        <img src={Logo} alt="Coffee Delivery logo" />
      </Link>

      <div className="header__options">
        Brasil
      </div>
    </header>
  )

}

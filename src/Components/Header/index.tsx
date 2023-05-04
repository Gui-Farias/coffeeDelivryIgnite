import './style.scss';
import Logo from '../../assets/logo.svg'

export function Header() {
  return (
    <header className='header'>
      <img src={Logo} alt="Coffee Delivery logo" />

      <div className="header__options">
        Brasil
      </div>
    </header>
  )

}

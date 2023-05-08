import { Outlet } from 'react-router-dom'
import { Header } from '../../Components/Header'

import './global.scss'

export function DefaultLayout() {
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  )
}

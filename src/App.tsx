import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router';
import { OrderContextProvider } from './context/OrderContext';

export function App() {

  return (
    <BrowserRouter>
      <OrderContextProvider>
        <Router />
      </OrderContextProvider>
    </BrowserRouter>
  )
}

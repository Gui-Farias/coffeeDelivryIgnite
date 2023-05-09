import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout";
import { DefaultLayout } from './layouts/DefaultLayout';
import { Success } from './pages/Success';

export function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

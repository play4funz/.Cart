import './App.css'
import Layout from './components/layout'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Shop from './pages/shop'
import Cart from './pages/cart'
import Login from './pages/login'
import ShopContext from './components/shopcontext'
import Details from './pages/details'

function App() {
  return <>
    <ShopContext>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path='shop' element={<Shop />} />
        <Route path='Cart' element={<Cart />} />
        <Route path='login' element={<Login />} />
        <Route path='details' element={<Details />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </ShopContext>
    </>
}
export default App

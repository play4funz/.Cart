import './App.css'
import Layout from './components/layout'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Shop from './pages/shop'
import Cart from './pages/cart'
import Login from './pages/login'
import Wishlist from './pages/wishlist'

function App() {

  return <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path='shop' element={<Shop />} />
        <Route path='Cart' element={<Cart />} />
        <Route path='Login' element={<Login />} />
        <Route path='Wishlist' element={<Wishlist />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
}

export default App

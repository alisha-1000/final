import Navbar from "./Components/Navbar/Navbar"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Shop from "./Pages/Shop"
import ShopCategory from "./Pages/ShopCategory"
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import LoginSignup from "./Pages/LoginSignup"
import Footer from "./Components/Footer/Footer"
import men_banner from "./assets/banner.jpg"
import women_banner from "./assets/women_banner.avif"
import kids_banner from "./assets/kids_banner.jpg"
import WishlistCheckout from './Pages/WishlistCheckout'
import Wishlist from './Pages/Wishlist'
import BillingDetails from './Pages/BillingDetails'
import Payment from './Pages/Payment'

function App() {
 
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/mens" element={<ShopCategory banner={men_banner} category="men"/> }/>
        <Route path="/womens" element={<ShopCategory banner={women_banner}category="women"/>}/>
        <Route path="/kids" element={<ShopCategory banner={kids_banner}category="kid"/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/product/:productId" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<LoginSignup/>}/>
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path='/wishlist-checkout' element={<WishlistCheckout />} />
        <Route path='/billing' element={<BillingDetails />} />
        <Route path='/payment' element={<Payment />} />
      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
     
  )
}

export default App

import { Routes, Route} from "react-router-dom";
import Homepage from './components/Homepage'
import Shop from './components/Shop'
import ShopFilter from './components/ShopFilter'
import Login from './components/Login'
import Cart from './components/Cart'
import Register from './components/Register'
import SingleProduct from './components/SingleProduct'
import Contact from "./components/Contact";
import AccountSettings from "./components/AccountSettings";
import Checkout from "./components/Checkout";
// import NotFound from "./components/NotFound";
// import PublicRoutes from "./routes/PublicRoutes"
// import PrivateRoutes from "./routes/PrivateRoutes"
import Newsletter from "./components/Newsletter";
import "./App.css";


function App() {
  
  return (
    <>
      <Routes>

     
          <Route path="/theJewelleryShop/" element={<Homepage />} />
          <Route path="/theJewelleryShop/shop" element={<Shop />} />
          <Route path="/theJewelleryShop/products/:id" element={<SingleProduct />}/>
          <Route path="/theJewelleryShop/shop/:filter" element={<ShopFilter />} />
          <Route path="/theJewelleryShop/contact" element={<Contact />} /> 
          <Route path="/theJewelleryShop/login" element={<Login />}/>
          <Route path="/theJewelleryShop/register" element={<Register />}/>
          {/* <Route path="/notfound" element={<NotFound />} /> */}
          <Route path="/theJewelleryShop/newsletter" element={<Newsletter />} /> 
          {/* <Route path='*' element={<Navigate to={"/home"} />} /> */}
    
          <Route path="/theJewelleryShop/account" element={<AccountSettings />} />
          <Route path="/theJewelleryShop/cart" element={<Cart />} />
          <Route path="/theJewelleryShop/checkout" element={<Checkout />} /> 
     
      </Routes>
    
    </>
    
  );
}

export default App

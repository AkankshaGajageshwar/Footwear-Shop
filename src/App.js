import './App.css';
import './assets/css/style.css';
import Header from './compoents/Header';
import Footer from './compoents/Footer';
import Home from './compoents/Home';
import Contact from './compoents/Contact';
import Cart from './compoents/Cart';
import AllProducts from './compoents/AllProducts';
// import Admin from './compoents/Admin';
import About from './compoents/About';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Product from './compoents/admin/Product'; 
import Layout from './compoents/admin/Layout';
import Dashboard from './compoents/admin/Dashboard';
import AdminLogin from './compoents/admin/AdminLogin';
import AddProduct from './compoents/admin/AddProduct';
import Admin from './compoents/Admin';
import Checkout from './compoents/Checkout';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/allproducts' element={<AllProducts/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}    />

        <Route path='/admin' element={< Layout/>}   >
            <Route index element={<Dashboard/>}    />
            <Route path='/admin/product' element={<Product/>}    />
            <Route path='/admin/addproduct' element={<AddProduct/>}          />
            <Route path='/admin/addproduct/:id' element={<AddProduct/>}    />

        </Route>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;

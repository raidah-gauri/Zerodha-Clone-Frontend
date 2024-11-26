import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes ,Route} from "react-router-dom";
import './index.css'
import HomePage from './landing_page/home/HomePage.jsx';
import SignUp from './landing_page/signup/SignUp.jsx';
import AboutPage from './landing_page/about/AboutPage.jsx';
import ProductsPage from './landing_page/products/ProductsPage.jsx';
import PricingPage from './landing_page/pricing/PricingPage.jsx';
import SupportPage from './landing_page/support/SupportPage.jsx';
import Navbar from './landing_page/Navbar.jsx';
import Footer from './landing_page/Footer.jsx';
import NotFound from './landing_page/notFound.jsx';

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <Navbar/>
 <Routes>
  <Route path='*' element={<NotFound/>}/>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/signup' element={<SignUp/>}/>
  <Route path='/about' element={<AboutPage />} />
  <Route path='/products' element={<ProductsPage />} />
  <Route path='/pricing' element={<PricingPage />} />
  <Route path='/support' element={<SupportPage />} />
 </Routes>
 <Footer/>
 </BrowserRouter>
   
)

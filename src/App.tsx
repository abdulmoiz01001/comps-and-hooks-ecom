import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import RegistrationComp from './components/RegistrationComp'
import OTPComp from './components/OTPComp'
import LoginComp from './components/LoginComp'
import AboutComp from './components/AboutComp'
import ContactComp from './components/ContactComp'
import TermsAndConditionsComp from './components/TermsAndConditionsComp'
import AddToCartComp from './components/AddToCartComp'
import DetailedProductCardComp from './components/DetailedProductCardComp'
import ProductSliderComp from './components/ProductSliderComp'
import PaymentComp from './components/PaymentComp'
import CustomButton from './components/CustomButton'
import { Button } from '@chakra-ui/react'
import {fadeIn} from "./variants"
import {motion} from "framer-motion"

function App() {

  return (
    <>
    <div className="w-full flex items-center justify-center">
            <ProductSliderComp />
          </div>
          <PaymentComp />
          <Button />
          <CustomButton name={"HEllo"} />
      <Router>
        <Routes>
          <Route path="/" element={<RegistrationComp />} />
          <Route path="/otp" element={<OTPComp />} />
          <Route path="/login" element={<LoginComp />} />
          <Route path="/about" element={<AboutComp />} />
          <Route path="/contact" element={<ContactComp />} />
          
          <Route path="/product/:id" element={<DetailedProductCardComp product={{
            id: 1,
            name: 'Product 1',
            brand: 'Brand 1',
            price: 50,
            imageUrl: 'https://via.placeholder.com/150',
            description: 'Product 1 description',

          }} onAddToCart={() => { }} />} />
           {/* <motion.div 
         variants={fadeIn('up',0)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:false,amount:0.5}}
       className="w-96 h-32 bg-red-600">
         </motion.div>

         <motion.div
          variants={fadeIn('down',0)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false,amount:0.5}}
          className="w-96 h-32 bg-red-600">
          </motion.div>

          <motion.div
            variants={fadeIn('left',0)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once:false,amount:0.5}}
            className="w-96 h-32 bg-red-600">
            </motion.div> */}
     
          <Route path="/cart" element={<AddToCartComp />} />
          <Route path="/termsandconditions" element={<TermsAndConditionsComp />} />
          <Route path="*" element={<h1>Not Found</h1>} />

        </Routes>

      </Router>
    </>
  )
}

export default App

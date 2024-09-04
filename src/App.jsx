import { useEffect, useState } from 'react'


import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Delivery from './components/Delivery'
import TopPicks from './components/TopPicks'
import MealData from './components/MealData'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import SignupForm from './components/SignUpForm'
import { CartData, CartValue } from './context/ContextApi'
import Cart from './components/Cart'
import { Toaster } from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)
  const [cartData, setCartData] = useState([])

  // set data  in local storage

  if (cartData.length > 0) {
    localStorage.setItem("CartData", JSON.stringify(cartData));

  }


  useEffect(() => {
    const savedCartData = JSON.parse(localStorage.getItem("CartData"));
    if (savedCartData) {
      setCartData(savedCartData);
    }
    setCount(savedCartData?.length)
  }, []);

  return (
    <>
      <Toaster /> 
      <CartValue.Provider value={{ count, setCount }}>
        <CartData.Provider value={{ cartData, setCartData }}>
          <BrowserRouter>
            <Routes>
              <Route path={"/"} element={<Header className="sticky top-0" />}>

                <Route path={"/"} element={<Home />} />

                <Route path={"/about"} element={<About />} />
                <Route path={"/offers"} element={<TopPicks />} />
                <Route path={"/ourFood"} element={<MealData />} />
                <Route path={"/signIn"} element={<SignupForm />} />
                <Route path={"/cart"} element={<Cart />} />

              </Route>

            </Routes>

          </BrowserRouter>
        </CartData.Provider>
      </CartValue.Provider>

    </>
  )
}
export default App

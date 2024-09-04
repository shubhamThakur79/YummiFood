import React, { useState } from 'react'
import Header from './Header'
import Hero from './Hero'
import Delivery from './Delivery'
import TopPicks from './TopPicks'
import MealData from './MealData'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { CartValue } from '../context/ContextApi'
import { Toaster } from 'react-hot-toast'

const Home = () => {
    const [count, setCount] = useState(0);
  

    return (
        <>
        
      
            <Hero />
            <Delivery />
            <TopPicks />
            <MealData />
            <Footer />


         
        </>
    )
}

export default Home
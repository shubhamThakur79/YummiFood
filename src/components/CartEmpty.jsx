import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const CartEmpty = () => {

  return (
    <div className='md:w-[60%] m-auto w-full flex flex-col justify-center'>
        <img className='md:w-[55%] object-cover w-[80%] m-auto' src="https://img.freepik.com/premium-psd/empty-cart-trolley-out-stock_66255-1332.jpg?ga=GA1.1.785720697.1706798610&semt=ais_hybrid" alt="" />
        <h1 className='text-2xl text-center mb-1 mt-4 font-semibold'>Your cart is empty</h1>
        <p className='text-md text-center mb-2'>You can go to home page to view more restaurants</p>
        <Link to={"/"} className='m-auto'>
        
        <button  className=' w-max text-center m-auto my-4 py-3 text-lg font-semibold text-black px-8 duration-100 hover:bg-[#fcc93f] bg-[#f1b205]'>See restaurants near you</button>
        </Link>
    </div>
  )
}

export default CartEmpty
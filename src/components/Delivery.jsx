import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


const Delivery = () => {

 
   
    return (
        <>
        
        <div className='py-16 w-full '>
            <h1 className='text-center text-[29px] text-[#faba0c] font-bold mb-2'>Quick Delivery App</h1>
            <div className='w-[100px] h-[3px] bg-blue-500 m-auto mb-6 rounded-2xl'></div>

            <div className='w-full flex flex-col gap-y-6  md:items-center md:flex-row pt-9 md:pt-12'>
                <div className='md:w-1/2 w-full md:h-[600px] h-[300px] '>
                    <img className='md:w-[600px] w-[350px] h-full object-contain md:ml-24 ml-5 ' src="https://toxsl.com/themes/new/img/screen/food_banner_image.png" alt="" />
                </div>
                <div className='pl-5'>
                    <p className='md:text-3xl text-2xl text-[#086908] font-bold'>Get The App</p>
                    <p className='md:text-5xl text-4xl capitalize font-bold mt-4'>the fastest food <br /> delivery in india</p>
                    <Link to={"/signIn"}>
                    <button className='bg-black hover:bg-black/80 duration-200 rounded-lg text-white px-7 mt-6 py-4 text-xl font-semibold'>Get Started</button>
                    
                    </Link>

                </div>
            </div>
        </div>
        <hr />
        </>
    )
}

export default Delivery
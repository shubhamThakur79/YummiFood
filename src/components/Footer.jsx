import React from 'react'

const Footer = () => {
    return (
        <div className='w-full h-max mb-0 bg-black mt-10 text-white'>
            <div className='flex flex-wrap justify-between w-full px-4 gap-y-7 md:w-[80%] m-auto py-8 h-[40vh]'>

                <div>
                    <p className='font-bold text-2xl'>Yumi<span className='text-[#fbc531]'>Food</span></p>
                    <p className='text-gray-400'>© 2024 All Rights Reserved by Shubham</p>
                </div>
                <div>
                    <p className='font-semibold text-xl'>Company</p>
                    <div className=' text-gray-400'>
                    <p>  About</p>
                    <p>  Careers</p>
                    <p>Team</p>
                    <p>Swiggy One</p>

                    </div>

                </div>
                <div>
                    <p className='font-semibold text-xl'>Contact us</p>
                    <div className='text-gray-400'>

                    <p>  Help & Support</p>
                    <p>  Partner with us</p>
                    <p>Ride with u</p>
                    </div>

                </div>
                <div>
                    <p className='font-semibold text-xl'>We deliver to:</p>
                    <div className='text-gray-400'>
                    <p>Bangalore</p>
                    <p> Gurgaon</p>
                    <p>Hyderabad</p>
                    <p>Delhi</p>
                    <p>Mumbai</p>
                    <p>Pune</p>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Footer
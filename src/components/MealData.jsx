import React, { useContext } from 'react'
import { mealData } from '../Data/mealData'
import { CartData, CartValue } from '../context/ContextApi'
import toast from 'react-hot-toast'
const MealData = () => {
    let { count, setCount } = useContext(CartValue)
    let { cartData, setCartData } = useContext(CartData)
    return (
        <>
            <h1 className='text-center font-semibold text-3xl my-3'>OUR FOOD</h1>
            <div className='w-[100px] h-[3px] bg-blue-500 m-auto mb-14 rounded-2xl'></div>
            

            <div className='grid  grid-cols-1 gap-8 md:mx-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>

                {mealData.map((item, i) => {
                    return <div key={i} className='flex  flex-col items-center  justify-start w-[95%] my-5 pb-4 rounded-lg gap-10 border  border-gray-800/30 mx-auto md:w-full'>

                        <img className='md:max-w-[200px] border-b border-slate-900/40 min-w-full rounded-lg md:max-h-[200px] min-h-[200px]   object-cover' src={item?.image_url} alt={item?.name} />
                        <div className='text-center mt-[-22px]'>

                            <p className='md:text-xl text-lg font-semibold'>{item?.name}</p>
                            <p className='md:text-xl text-lg font-semibold'>${item?.price}</p>
                        </div>
                        <button onClick={() => {
                          
                            setCount(count + 1)
                            let uniqueCartData = cartData.find((data) => {
                                return data?.name === item?.name;  // Compare the new item's image_url with those in the cart
                            });
                            
                            if (uniqueCartData) {
                                setCount(cartData.length)
                                toast.error("Item already in cart");  // Show error if item is already in the cart
                            } else {
                                setCartData([...cartData,item]);  // Add the new item to the cart if it doesn't exist
                                toast.success("Item Added")
                            }
                            console.log(item)
                        }}
                            className='bg-black mt-[-15px] hover:bg-black/80  hover:outline-[2px] duration-200 rounded-lg text-[#fbc531] px-4  py-3 text-lg font-semibold'>
                            Add to Cart
                        </button>

                    </div>
                })
                }
            </div>

            <hr />
        </>
    )
}

export default MealData
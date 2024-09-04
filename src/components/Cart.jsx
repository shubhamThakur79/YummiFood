import React, { useContext, useState } from 'react';
import { CartData, CartValue } from '../context/ContextApi';
import toast from 'react-hot-toast';
import CartEmpty from './CartEmpty';

const Cart = () => {
    const { cartData, setCartData } = useContext(CartData);
    let { count, setCount } = useContext(CartValue)
    setCount(cartData.length)





    const [quantities, setQuantities] = useState(
        cartData.map(() => 0) // Initialize an array with 0 quantities for each item
    );

    // Function to handle quantity change
    const handleQuantityChange = (index, change) => {
        setQuantities((prevQuantities) => {
            const newQuantities = [...prevQuantities];
            newQuantities[index] = Math.max(0, newQuantities[index] + change); // Ensure quantity doesn't go below 0
            return newQuantities;
        });
    };

    function handleRemove(index) {
        let newcartData = [...cartData]
        newcartData.splice(index, 1)
        setCartData([...newcartData])

    }
    function CartCleared() {
        setCartData([])
        localStorage.removeItem("CartData")
    }
    return (
        <div className='w-full md:w-[90%] mx-auto  relative'>
            {cartData.map((item, i) => (
                <>
                    <div key={i} className='flex px-2 bg-gray-200/60 md:min-w-max md:max-w-[80%] items-center m-auto gap-1 md:gap-10 my-1 rounded-lg md:my-4'>
                        <div className='md:max-w-[300px] md:min-w-[300px]  md:h-[200px] h-[160px] min-w-[150px] max-w-[150px] overflow-hidden rounded-3xl drop-shadow-2xl'>
                            <img className='w-[100%] bg-black object-cover h-full' src={item?.image_url} alt="" />
                        </div>
                        <div className='basis-[55%] justify-start items-start h-[200px] p-4'>
                            <h1 className='text-xl line-clamp-1'>{item?.name}</h1>
                            <p className='md:line-clamp-1 line-clamp-2 font-semibold'>{item?.description}</p>
                            <p className='font-semibold'>₹{item?.price}</p>
                            <div className='flex w-max  mt-5 flex-row-reverse gap-4'>

                                {
                                    quantities.length != 0 && <div className='flex px-2 md:px-4 items-center gap-5 border border-slate-400 rounded  w-max'>
                                        {/* Decrease Quantity */}
                                        <h1
                                            className='text-4xl cursor-pointer'
                                            onClick={() => handleQuantityChange(i, -1)}
                                        >
                                            -
                                        </h1>

                                        {/* Display Quantity */}
                                        <h1 className='text-xl'>{quantities[i]}</h1>

                                        {/* Increase Quantity */}
                                        <h1
                                            className='text-3xl cursor-pointer'
                                            onClick={() => handleQuantityChange(i, 1)}
                                        >
                                            +
                                        </h1>
                                    </div>
                                }

                                <button
                                    onClick={() => {
                                        toast.error("removed");
                                        handleRemove(i);               // Remove item from cart
                                    }}
                                    className='border md:px-7 px-4 h-10 md:h-auto text-white font-semibold py-[2px] md:py-2 bg-red-600'
                                >
                                    Remove
                                </button>


                            </div>
                        </div>
                    </div>

                </>

            ))}
            {cartData.length > 0 && <div className='fixed bottom-0  bg-black/60 text-white flex justify-end p-1 md:p-0   md:w-[72%]  h-14 w-full left-1/2 -translate-x-1/2'>
                <button onClick={() => {
                    toast.success("Cart is Empty Now")
                    CartCleared()

                }

                } className='px-10 text-lg md:m-1 hover:bg-blue-500/50 duration-500 font-semibold py-2 bg-black '>All Clear</button>
            </div>}

            {/* If Cart is empty  */}

            {
                cartData?.length <= 0 && <CartEmpty />
            }
        </div>
    );
};

export default Cart;

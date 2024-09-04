import React, { useContext } from 'react';
import { data } from '../Data/data'; // Make sure to import your data
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Import the slick styles
import "slick-carousel/slick/slick-theme.css";
import { CartData, CartValue } from '../context/ContextApi';
import toast from 'react-hot-toast';

const TopPicks = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    let { count, setCount } = useContext(CartValue)
    let { cartData, setCartData } = useContext(CartData)

    // Assuming 'item' is the new item you're trying to add to the cart


    return (
        <>

            <div className='slider-container md:w-[90%] m-auto py-10'>
                <h1 className='text-3xl font-semibold text-center mb-3 '>What's On Your Mind</h1>
                <div className='w-[100px] h-1 bg-blue-500 m-auto mb-14 rounded-2xl'></div>
                <Slider {...settings}>
                    {data.map((topItem, i) => (
                        <div key={i} className="p-4 rounded-md">
                            <div className='flex justify-center items-center rounded-xl'>
                                <img
                                    className='w-[200px] h-[200px] rounded-full object-cover'
                                    src={topItem?.image_url}
                                    alt={topItem.name}
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center gap-2 p-4'>
                                <p className='md:text-xl text-lg font-semibold'>{topItem?.name}</p>
                                <p className='md:text-xl text-lg font-semibold'>₹{topItem?.price}</p>
                                <button onClick={() => {

                                    setCount(count + 1)
                                    let uniqueCartData = cartData.find((data) => {
                                        return data?.name === topItem?.name;  // Compare the new item's image_url with those in the cart
                                    });

                                    if (uniqueCartData) {
                                        setCount(cartData.length)
                                        toast.error("Item already in cart");  // Show error if item is already in the cart
                                    } else {
                                        setCartData([...cartData, topItem]);  // Add the new item to the cart if it doesn't exist
                                        toast.success("Item Added")
                                    }
                                    console.log(data)
                                }} className='bg-black hover:bg-[#0945ebb7]  hover:outline-[2px] duration-200 rounded-lg text-white px-5 mt-3 py-3 text-lg font-semibold'>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </Slider>

            </div>
            <hr />
        </>
    );
}

export default TopPicks;

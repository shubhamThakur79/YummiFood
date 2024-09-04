import React, { useEffect, useState } from 'react'
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa'

const Hero = () => {
    let heroData = [
        {
            url: "https://b.zmtcdn.com/data/pictures/1/18431471/dc7b4a1bb864ae473446b38b9d495136.jpg"
        },
        {
            url: "https://b.zmtcdn.com/data/pictures/4/20311324/c046cbaa4fea1a67bae3a6bb68c08bd5.jpg?output-format=webp"

        },
        {
            url: "https://b.zmtcdn.com/data/reviews_photos/f50/bd6d74550f687ad4c736bc4dfad42f50_1712075482.jpg?output-format=webp"

        },
        {
            url: "https://b.zmtcdn.com/data/reviews_photos/d8b/1550180557a39d86b991f34e4a6d9d8b_1714409093.jpg?output-format=webp"

        },
        {
            url: "https://b.zmtcdn.com/data/pictures/4/20311324/216544c4516e38661e02e6dd64ec52c1.jpg?output-format=webp"
        },
        {
            url: "https://b.zmtcdn.com/data/pictures/4/20311324/fd727d707be36795e404ac68e3f91b8d.jpg?output-format=webp"
        },
    ]
    const [index, setIndex] = useState(0)

    function handleRight() {
        setIndex(index === heroData?.length - 1 ? 0 : index + 1)
    }

    function handleLeft() {
        setIndex(index === 0 ? heroData.length - 1 : index - 1)
    }

    useEffect(() => {
       const slider = setInterval(()=>{
            handleRight()
        },3000)

        return ()=>clearInterval(slider)
    }, [index])
    return (
        <>
        
        <div className='w-full'>
            <div className='relative rounded-xl w-full sm:w-[90%] m-auto md:mt-5'>
                {
                    heroData?.map((obj, i) => {
                        return <div key={i} className={`${index === i ? "block" : "hidden"} overflow-hidden h-[40vh] sm:h-[80vh] duration-700` }>
                            <img className='duration-500 md:rounded-lg  h-full w-full object-cover' src={obj?.url} alt="dishes" />

                        </div>
                    })
                }
            <div className='w-full h-full bg-zinc-950 absolute top-0 opacity-50 rounded-lg'></div>
            <p className='w-full h-full absolute top-[40%] md:top-[50%] text-white text-center font-semibold text-2xl md:text-4xl'><span className='text-green-500 text-3xl md:text-5xl'>Welcome </span> to the World of <br className='block md:hidden'></br> Testy & Fresh Food</p>
            </div>

            <div className='flex  w-full sm:w-full md:w-[90%]  md:ml-[75px] justify-between absolute top-[28%]  sm:top-[55%] md::px-2'>

                <div onClick={handleLeft} className='cursor-pointer w-max flex justify-center items-center  sm:bg-gray-100/30  rounded-[50%] text-center sm:p-2 hover:bg-gray-400'>
                    <FaCaretLeft size={40} className='sm:text-[#fbc531] text-red-700  ' />
                </div>

                <div onClick={handleRight} className='cursor-pointer w-max  flex justify-center items-center sm:bg-gray-100/30 rounded-[50%] text-center sm:p-2 hover:bg-gray-400'>
                    <FaCaretRight size={40} className='sm:text-[#fbc531] text-red-700' />
                </div>
            </div>
        </div>
        <hr className='mt-10' />
        </>
    )
}

export default Hero
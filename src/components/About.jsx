import React from 'react'

const About = () => {
    return (
        <div className='md:w-[90%] m-auto w-full mt-10 mb-10 px-3 md:px-0'>
            <h1 className='md:text-4xl text-3xl my-4'>Driving the force of <span className='text-[#EF4F5F]'>assortment</span> </h1>
            <p className='text-xl font-extralight'>For over a decade now, we’ve been empowering our customers in discovering new tastes and experiences across countries. By putting together meticulous information for our customers,
                we enable them to make an informed choice.</p>
            <div className='w-full flex md:flex-row flex-col justify-between items-center mt-7'>
                <div className='basis-[45%]'>
                    <h1 className='md:text-4xl text-3xl mt-5 mb-2'>Who are we?</h1>
                    <div className='w-[90px] h-[4px] mb-2 ml-1 bg-[#EF4F5F]'></div>
                    <p className='text-xl font-extralight'>Launched in 2010, Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs. Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos, order food delivery, book a table and make payments while dining-out at restaurants. On the other hand, we provide restaurant partners with industry-specific marketing tools which enable them to engage and acquire customers to grow their business while also providing a reliable and efficient last mile delivery service. We also operate a one-stop procurement solution, Hyperpure, which supplies high quality ingredients and kitchen products to restaurant partners. We also provide our delivery partners with transparent and flexible earning opportunities.</p>

                </div>
                <div className='basis-[45%] pt-10'>
                    <img className='h-full w-full object-cover rounded-xl' src="https://b.zmtcdn.com/web/about/2164bf45244e5c8444183e44500bbce01563210961.png?output-format=webp" alt="" />
                </div>
            </div>

            <div className='mt-16 mx-auto flex flex-col items-center'>
                <h1 className='md:text-5xl text-3xl md:text-center font-semibold py-9'>The Big Brand Theory | How this Brand <br /> Set on a Mission to Samosa-fy the World!</h1>
                <p className='font-extralight text-xl'>Samosa Party was born out of a passion to elevate Indian ethnic snacking to a whole new level. The idea was simple yet ambitious: to make Indian street food hygienic, reliable, available round-the-clock and comparable to international food outlets.
                    <br />
                    In the words of Diksha, co-founder of Samosa Party, “As Indians, we tend to snack a lot more than our global counterparts. However, my co-founder Amit and I identified a gap – the snacking scene was either dominated by local, unorganized vendors or generic packaged food. There wasn’t a single brand offering organized ethnic snacks at a national scale.”</p>
                <img className='my-8 md:h-[70vh]  object-cover' src="https://i0.wp.com/zomatoblog.com/wp-content/uploads/2024/08/image2-2.png?resize=768%2C705&ssl=1" alt="" />
                <h1 className='text-xl font-bold'>Unique selling point: Simple yet delightful</h1>
                <p className='font-extralight text-xl'>Continuous innovation is the DNA of Samosa Party.
                    <br />
                    Diksha says “Our innovative products like Party Buckets and Samosa Corners are designed to make the snacking experience unforgettable. Here, we’re not just making samosas; we’re creating memories, one delicious bite at a time.”</p>
                <img className='my-8 md:h-[70vh]  object-cover'  src="https://i0.wp.com/zomatoblog.com/wp-content/uploads/2024/08/aloo-bucket-and-chai-1.png?resize=768%2C576&ssl=1" alt="" />
                <p className='font-extralight text-xl'>The owners aspire to take Indian snacking to the world!
                    <br />
                    Diksha and Amit have a grand vision to make Samosa Party a global phenomenon, spreading the love for Indian snacks far and wide. Their ambition goes beyond just serving samosas; they aim to share a piece of India’s rich culinary tradition with every corner of the globe.</p>
                <img className='my-8 md:h-[70vh]  object-cover'  src="https://i0.wp.com/zomatoblog.com/wp-content/uploads/2024/08/All-in-Buclet-2-1-2.jpg?resize=768%2C576&ssl=1" alt="" />
            </div>
        </div>
    )
}

export default About
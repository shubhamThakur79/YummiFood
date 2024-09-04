import React from "react";
import { Link } from "react-router-dom";

const SignupForm = () => {
    return (
        <div className="flex md:flex-row  flex-col-reverse items-center justify-between min-h-screen bg-cover bg-no-repeat" style={{ backgroundImage: "url('https://b.zmtcdn.com/data/o2_assets/60a2ed05c65decc1afc09adc7ecc68c81659679957.png')" }}>

            <div className="md:w-1/2 w-full h-full mb-8 mt-4">
                <img className="w-[60%] object-cover m-auto" src="https://www.swiggy.com/about-us/wp-content/uploads/2024/04/about-img1-new.png" alt="" />
                <h1 className="text-white font-semibold md:text-4xl text-3xl text-center">Get Started With Your Account</h1>
                <p className="text-white text-xl text-center">Find you favourite food on our platform. just one step to order your food</p>
            </div>
            <div className="bg-black/70  mt-[80px] pb-[50px] w-full md:w-1/2 m-auto bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg  max-w-md">
                <h2 className="text-2xl font-semibold text-white mb-6 text-center">Sign Up</h2>

                <form action="/">
                    <div className="mb-4">
                        <label className="block text-white text-sm font-semibold mb-2">Full Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-white text-sm font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="youremail@example.com"
                            className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-white text-sm font-semibold mb-2">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-white text-sm font-semibold mb-2">Phone Number</label>
                        <input
                            type="tel"
                            placeholder="+91-XXXXXXXXXX"
                            className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                        />
                    </div>
                    {/* <Link to={"/"}> */}
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                        >
                            Sign Up
                        </button>

                    {/* </Link> */}
                </form>
            </div>
        </div>
    );
};

export default SignupForm;

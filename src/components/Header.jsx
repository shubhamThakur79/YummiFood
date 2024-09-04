import React, { useContext, useState } from 'react';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { MdOutlineClose } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link, Outlet } from 'react-router-dom';
import { CartValue } from '../context/ContextApi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  function ToggleMenu() {
    setIsOpen(!isOpen);
  }

  const { count } = useContext(CartValue)


  return (


    <div className=" w-full bg-white">
      <nav className="relative z-40 text-lg md:text-xl flex justify-between items-center p-4 md:p-6 h-[75px] font-normal border-b">
        {/* Logo */}
        <Link to={"/"}>
          <div>
            <p className="font-bold">Yumi<span className="text-[#fbc531]">Food</span></p>
          </div>

        </Link>

        {/* Nav Links */}
        <div className={`absolute cursor-pointer bg-[#c9c7c7] sm:bg-transparent pl-5 w-1/2 sm:w-max py-5 h-[90vh] sm:h-max top-[75px] font-semibold sm:font-normal duration-300 ${isOpen ? "right-0 block" : "right-[-50%] hidden md:block"} sm:static`}>
          <ul onClick={ToggleMenu} className="flex gap-10 cursor-pointer sm:flex-row flex-col">
            <Link to="/">
              <li className="hover:text-[#c0a455]">Home</li>
            </Link>
            <Link to="/about">
              <li className="hover:text-[#c0a455]">About Us</li>
            </Link>
            <Link to="/offers">
              <li className="hover:text-[#c0a455]">Offers</li>
            </Link>
            <Link to="/ourFood">
              <li className="hover:text-[#c0a455]">Our Food</li>
            </Link>
            <Link to="/signIn">
              <li className="hover:text-[#c0a455]">Sign In</li>
            </Link>
          </ul>

        </div>

        {/* Cart */}

        <div className="flex cursor-pointer gap-8 items-center">
          <Link to={"/cart"}>

            <p className='flex items-center rounded-xl border gap-[2px] py-1 px-2'><span>{count}</span><BsFillCartPlusFill className="text-xl md:text-2xl" /></p>
          </Link>

          {/* Hamburger Menu for small devices */}
          <div onClick={ToggleMenu} className="block sm:hidden">
            {isOpen ? <MdOutlineClose className="text-[22px]" /> : <RxHamburgerMenu />}
          </div>
        </div>
      </nav>
      <Outlet />
    </div>

  );
};

export default Header;

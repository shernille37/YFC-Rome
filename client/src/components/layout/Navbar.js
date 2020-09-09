import React, { useState } from 'react';
import Logo from '../../assets/Images/Logo';

const Navbar = () => {
  const [isClicked, setClicked] = useState(false);
  const [isTop, setPosition] = useState(true);

  const openCollapse = () => {
    if (!isClicked) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  };

  window.onscroll = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      setPosition(false);
    } else {
      setPosition(true);
    }
  };

  return (
    <nav
      className={`navBar flex justify-between flex-wrap p-6 fixed z-10 w-full bg-red-700 ${
        !isTop ? 'bg-opacity-75' : ''
      }`}
    >
      <div className='flex items-center flex-shrink-0 text-white mr-12'>
        <a href='/'>
          <Logo />
        </a>

        <a href='/' className='font-semibold text-2xl tracking-tight'>
          Youth for Christ
        </a>
      </div>
      <div className='block lg:hidden mt-2'>
        <button
          className='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'
          onClick={() => openCollapse()}
        >
          <svg
            className='fill-current h-3 w-3'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>
      </div>
      <div
        className={`w-full flex-grow ${
          !isClicked ? 'hidden' : 'block'
        } lg:flex lg:items-center lg:w-auto`}
      >
        <div className='text-sm md:flex-grow font-exo'>
          <a
            href='/'
            className='text-lg block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-6 lg:mr-12 text-center'
            onClick={() => setClicked(false)}
          >
            Home
          </a>

          <a
            href='/about'
            className='text-lg block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-6 lg:mr-12 text-center'
            onClick={() => setClicked(false)}
          >
            About
          </a>
          <a
            href='/members'
            className='text-lg block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-6 lg:mr-12 text-center'
            onClick={() => setClicked(false)}
          >
            Members
          </a>
          <a
            href='/contacts'
            className='text-lg block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white text-center'
            onClick={() => setClicked(false)}
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

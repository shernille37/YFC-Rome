import React, { useState, useEffect } from 'react';
import Logo from '../../assets/Images/Logo';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isClicked, setClicked] = useState(false);
  const [isTop, setPosition] = useState(true);
  const [forceRender, setForceRender] = useState(0);

  const pathName = window.location.pathname;

  useEffect(() => {
    setClicked(false);
  }, [forceRender]);

  // -- OPEN COLLAPSE FUNCTION -- //

  const openCollapse = () => {
    if (!isClicked) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  };

  // -- WINDOW ONSCROLL FUNCTION -- //

  window.onscroll = () => {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      setPosition(false);
    } else {
      setPosition(true);
    }
  };

  return (
    <nav
      className={`navBar flex justify-between flex-wrap p-6 fixed top-0 z-10 w-full transition-colors duration-500 ease-in-out ${
        pathName === '/'
          ? isTop
            ? 'bg-transparent'
            : 'bg-red-700 bg-opacity-75'
          : isTop
          ? 'bg-red-700'
          : 'bg-red-700 bg-opacity-75'
      }`}
    >
      <div className='flex items-center flex-shrink-0 text-white mr-12'>
        <Link to='/'>
          <Logo />
        </Link>

        <Link
          to='/'
          className='font-semibold text-2xl tracking-tight'
          onClick={() => setForceRender(forceRender + 1)}
        >
          Youth for Christ
        </Link>
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
        <div className='text-sm md:flex-grow font-exo text-white'>
          <Link
            to='/'
            className='text-lg block mt-4 lg:inline-block lg:mt-0 mr-6 lg:mr-12 text-center hover:text-black'
            onClick={() => setForceRender(forceRender + 1)}
          >
            Home
          </Link>

          <Link
            to='/about'
            className='text-lg block mt-4 lg:inline-block lg:mt-0 mr-6 lg:mr-12 text-center hover:text-black'
            onClick={() => setForceRender(forceRender + 1)}
          >
            About
          </Link>
          <Link
            to='/members'
            className='text-lg block mt-4 lg:inline-block lg:mt-0 mr-6 lg:mr-12 text-center hover:text-black'
            onClick={() => setForceRender(forceRender + 1)}
          >
            Members
          </Link>
          <Link
            to='/contacts'
            className='text-lg block mt-4 lg:inline-block lg:mt-0 text-center hover:text-black'
            onClick={() => setForceRender(forceRender + 1)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

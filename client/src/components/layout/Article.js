import React from 'react';
import theme from '../../assets/Images/yfc-theme.jpg';

const Article = () => {
  return (
    <div className='container mx-auto p-4 min-h-full grid md:grid-cols-3 sm:grid-cols-1'>
      <div className='bg-blue-500 p-4 flex flex-col justify-center items-center md:col-span-2'>
        <h1 className='text-3xl'>Welcome!</h1>
        <p className='text-center'>Welcome to the official site of YFC Rome!</p>
      </div>

      <div className='bg-red-500 p-4 flex justify-center items-center'>
        <img src={theme} alt='Logo' width='300' className='rounded-lg' />
      </div>
    </div>
  );
};

export default Article;

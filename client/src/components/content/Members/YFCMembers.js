import React, { Fragment } from 'react';

import coordinators from '../../../assets/Images/YFC/Heads/Coordinators.jpg';
import andrei from '../../../assets/Images/YFC/Heads/Andrei.jpg';
import chiara from '../../../assets/Images/YFC/Heads/Chiara.jpg';

const YFCMembers = () => {
  return (
    <Fragment>
      <div>
        <p className='membersTitle text-center h-10 sm:h-auto text-2xl md:text-4xl lg:text-5xl font-allerta'>
          YFC Rome Coordinators
        </p>
        <div className='coordinators container grid grid-cols-1 md:grid-cols-2 gap-4 p-6'>
          <div className='flex justify-center items-center'>
            <img
              src={coordinators}
              alt='Coordinators'
              width='300'
              className='iconImg'
            />
          </div>
          <div className='flex justify-center items-center'>
            <p className='text-2xl sm:text-4xl font-exo'>
              Freidrich | Cheng Navales
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className='membersTitle text-center h-10 sm:h-auto text-2xl md:text-4xl lg:text-5xl font-allerta'>
          Chapter Heads | Members
        </p>
        <div className='coordinators container grid grid-cols-1 md:grid-cols-2 gap-4 p-6'>
          <div className='flex md:flex-col justify-center items-center'>
            <img
              src={andrei}
              alt='Andrei Gatmaitan'
              width='300'
              className='m-4 iconImg'
            />
            <h1 className='font-exo text-2xl sm:text-4xl text-center'>
              Andrei Gatmaitan
            </h1>
          </div>
          <div className='flex justify-center items-center'>
            <p className='text-2xl sm:text-4xl font-exo'>Members</p>
          </div>
        </div>
        <div className='coordinators container grid grid-cols-1 md:grid-cols-2 gap-4 p-6'>
          <div className='flex md:flex-col justify-center items-center'>
            <img
              src={chiara}
              alt='Chiara Trinidad'
              width='300'
              className='m-4 iconImg'
            />
            <h1 className='font-exo text-2xl sm:text-4xl text-center'>
              Chiara Trinidad
            </h1>
          </div>
          <div className='flex justify-center items-center'>
            <p className='text-2xl sm:text-4xl font-exo'>Members</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default YFCMembers;

import React, { Fragment } from 'react';
import ImgGallery from './ImgGallery';
import Member from './Member';
import coordinators from '../../../assets/Images/YFC/Heads/Coordinators.jpg';
import andrei from '../../../assets/Images/YFC/Heads/Andrei.jpg';
import chiara from '../../../assets/Images/YFC/Heads/Chiara.jpg';
import mary from '../../../assets/Images/YFC/Heads/Mary.jpg';
import jersey from '../../../assets/Images/YFC/Heads/Jersey.jpg';
import jessica from '../../../assets/Images/YFC/Heads/Jessica.jpg';
import kathreen from '../../../assets/Images/YFC/Heads/Kathreen.jpg';

const YFCMembers = () => {
  const membersInfo = [
    {
      id: 1,
      type: 'Chapter Head',
      name: 'Andrei Gatmaitan',
      img: andrei,
      aos: 'fade-in',
    },
    {
      id: 2,
      type: 'Chapter Head',
      name: 'Chiara Trinidad',
      img: chiara,
      aos: 'fade-in',
    },
    {
      id: 3,
      type: 'YCOM Head',
      name: 'Kathreen Magsino',
      img: kathreen,
      aos: 'zoom-in',
    },
    {
      id: 4,
      type: 'Household Head',
      name: 'Shernille Licud',
      img: jersey,
      aos: 'fade-down',
    },
    {
      id: 5,
      type: 'Household Head',
      name: 'Mary Marcelo',
      img: mary,
      aos: 'zoom-in',
    },
    {
      id: 6,
      type: 'Household Head',
      name: 'Jessica Guevarra',
      img: jessica,
      aos: 'fade-in',
    },
  ];

  return (
    <Fragment>
      <div
        data-aos='zoom-in'
        data-aos-offset='200'
        data-aos-delay='50'
        data-aos-duration='500'
        data-aos-easing='ease-in-out'
      >
        <p className='membersTitle text-center h-10 sm:h-auto text-2xl md:text-4xl lg:text-5xl font-allerta'>
          YFC Rome Coordinators
        </p>
        <div className='coordinators container grid grid-cols-1 md:grid-cols-2 gap-4 p-6'>
          <div className='flex justify-center items-center'>
            <img
              src={coordinators}
              alt='Coordinators'
              width='250'
              className='iconImg'
            />
          </div>
          <div className='flex justify-center items-center'>
            <p className='text-2xl sm:text-4xl font-exo text-center'>
              Freidrich | Cheng Navales
            </p>
          </div>
        </div>
      </div>
      <div>
        <p
          className='membersTitle text-center h-10 sm:h-auto text-2xl md:text-4xl lg:text-5xl font-allerta'
          data-aos='zoom-in'
          data-aos-offset='200'
          data-aos-delay='50'
          data-aos-duration='500'
          data-aos-easing='ease-in-out'
        >
          YFC Rome Heads
        </p>

        {membersInfo.map((member) => (
          <Member info={member} key={member.id} />
        ))}
      </div>
      <div className='flex flex-col justify-center items-center'>
        <p className='membersTitle w-full text-center h-10 sm:h-auto text-2xl md:text-4xl lg:text-5xl font-allerta'>
          YFC Rome Members
        </p>
        <div className='w-full lg:w-1/2 md:w-4/5'>
          <ImgGallery />
        </div>
      </div>
    </Fragment>
  );
};

export default YFCMembers;

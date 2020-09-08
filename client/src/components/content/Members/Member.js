import React from 'react';
import PropTypes from 'prop-types';

const Member = ({ info: { type, name, img, aos } }) => {
  return (
    <div
      className='coordinators container grid grid-cols-1 md:grid-cols-2 gap-4 p-6'
      data-aos={aos}
      data-aos-offset='200'
      data-aos-delay='50'
      data-aos-duration='500'
      data-aos-easing='ease-in-out'
    >
      <div className='flex md:flex-col justify-center items-center'>
        <img src={img} alt={name} width='250' className='m-4 iconImg' />
        <h1 className='font-exo text-2xl sm:text-4xl text-center'>{type}</h1>
      </div>
      <div className='flex justify-center items-center'>
        <p className='text-2xl sm:text-4xl font-allerta'>{name}</p>
      </div>
    </div>
  );
};

Member.propTypes = {
  info: PropTypes.object.isRequired,
};

export default Member;

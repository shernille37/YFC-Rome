import React, { Fragment } from 'react';
import background from '../../assets/Images/yfc-rome.jpg';

const Showcase = () => {
  return (
    <Fragment>
      <div className='showcase border-b border-black border-solid'>
        <img src={background} alt='background' className='showCaseImage' />

        <div className='desc xl:container xl:mx-auto xl:px-6'>
          <div className='flex flex-col justify-center items-center lg:w-1/2'>
            {/* or w-full */}
            <h1 className='text-center text-white sm:text-lg'>YFC ROME</h1>
            <p className='text-center text-white font-exo'>
              Young people being and bringing Christ wherever they are
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Showcase;

import React, { Fragment } from 'react';
import FourEf from './FourEf';
import Identities from './Identities';
import theme from '../../../assets/Images/yfc-theme.jpg';

const Article = () => {
  return (
    <Fragment>
      <div className='pimg1 text-white flex justify-center items-center'>
        <div className='container mx-auto p-4 grid md:grid-cols-3 sm:grid-cols-1'>
          <div className='text-center flex flex-col justify-center items-center md:col-span-2 '>
            <h1 className='font-allerta'>Welcome!</h1>
            <p className='text-2xl font-exo'>
              Welcome to the official site of YFC Rome!
            </p>
          </div>

          <div
            className='p-4 flex justify-center items-center'
            data-aos='zoom-in'
            data-aos-offset='200'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
          >
            <img
              src={theme}
              alt='Logo'
              width='300'
              className='yfcTheme rounded-lg'
            />
          </div>
        </div>
      </div>

      <section className='text-center p-4'>
        <h1 className='text-4xl font-allerta'>About Us</h1>
      </section>

      <div className='pimg flex justify-start items-center py-4'>
        <div className='text-white text-base md:text-2xl text-center font-exo'>
          <div
            className='about p-6 mx-auto w-full lg:w-4/5 sm:rounded-lg sm:border-2 sm:border-solid sm:border-black'
            data-aos='fade-in'
            data-aos-offset='200'
            data-aos-delay='50'
            data-aos-duration='500'
            data-aos-easing='ease-in-out'
          >
            CFC-Youth for Christ is a ministry under the Couples for Christ
            Global Mission Foundation which unites people especially the youth
            to engage in building relationships with other people globally and
            to build oneness in spiritual faith.
          </div>
        </div>
      </div>

      {/* Youth for Christ 4 F's */}
      <FourEf />
      {/* Youth for ChristSEVEN IDENTITIES  */}
      <Identities />

      <section className='p-4 text-center'>
        <h1 className='four text-lg md:text-4xl font-exo'>
          EPHESIANS 5: 8 – 9, 14
        </h1>
      </section>

      <div className='text-white text-center last pimg1 flex justify-start items-center font-exo'>
        <div className='container mx-auto p-5 w-full lg:w-4/5 sm:border-2 sm:border-solid sm:border-black sm:rounded-lg'>
          “For you were once darkness, but now you are light in the Lord. Live
          as children of light, for light produces every kind of goodness and
          righteousness, and truth. Awake, O Sleeper, and rise from the dead,
          and Christ will give you light.”
        </div>
      </div>
    </Fragment>
  );
};

export default Article;

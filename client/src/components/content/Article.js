import React, { Fragment } from 'react';
import theme from '../../assets/Images/yfc-theme.jpg';

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

          <div className='p-4 flex justify-center items-center'>
            <img src={theme} alt='Logo' width='300' className='rounded-lg' />
          </div>
        </div>
      </div>

      <section className='text-center p-4'>
        <h1 className='text-4xl font-allerta'>About Us</h1>
      </section>

      <div className='pimg flex justify-start items-center py-4'>
        <div className='text-white text-md md:text-2xl text-center font-exo'>
          <div className='about p-6 mx-auto w-full lg:w-4/5 sm:rounded-lg sm:border-2 sm:border-solid sm:border-black'>
            CFC-Youth for Christ is a ministry under the Couples for Christ
            Global Mission Foundation which unites people especially the youth
            to engage in building relationships with other people globally and
            to build oneness in spiritual faith. Our goal is to evangelize other
            youths through our programs and to bring to life the mission and
            vision articulated in the Youth for Christ community through gateway
            evangelization activities conducted in different areas worldwide.
          </div>
        </div>
      </div>

      <section className='text-center p-4'>
        <h1 className='text-xl sm:text-4xl font-allerta'>
          Youth for Christ <span className='four'>4 F's</span>
        </h1>
      </section>

      <div className='pimg2 flex text-white justify-center items-center'>
        <div className='four-ef w-full h-full px-6 py-6 text-center grid lg:grid-cols-2 md:grid-cols-1 gap-2'>
          <div className='card w-full relative p-10 rounded-lg border-2 border-black border-solid'>
            <div className='back absolute opacity-0 p-4'>
              Being young means having fun.YFC promotes and supports the
              dynamism of the youth's thirst to the fullest. YFC encourages fun
              - good, clean fun.
            </div>
            <h1 className='front text-4xl font-exo'>Fun</h1>
          </div>

          <div className='card w-full relative p-10 rounded-lg border-2 border-black border-solid'>
            <div className='back absolute opacity-0 p-4'>
              One can barely contain the enthusiasm of a spirit, within the YFC
              community, the youth experience freedom from sins, from
              insecurities, as well as the freedom to express love and to become
              the individuals whom God meant to them.
            </div>
            <h1 className='front text-4xl font-exo'>Freedom</h1>
          </div>
          <div className='card w-full relative p-10 rounded-lg border-2 border-black border-solid'>
            <div className='back absolute opacity-0 p-4'>
              This is the time of their lives when the youth begin to form long
              lasting relationships with their peers. YFC encourages friendship
              among young people, enabling them to see God in every individual
              they encounter.
            </div>
            <h1 className='front text-4xl font-exo'>Friendship</h1>
          </div>

          <div className='card w-full relative p-10 rounded-lg border-2 border-black border-solid'>
            <div className='back absolute opacity-0 p-4'>
              None of the three can be fully experienced without the faith in
              God. In YFC, the youth are taught the catholic faith that they may
              better appreciate the abundant blessings they receive in their
              lives.
            </div>
            <h1 className='front text-4xl font-exo'>Faith</h1>
          </div>
        </div>
      </div>

      <section className='p-4'>
        <h1 className='four text-center text-xl sm:text-4xl font-allerta'>
          SEVEN IDENTITIES
        </h1>
      </section>

      <div className='pimg3 py-32'>
        <div className='container mx-auto p-4 text-center grid grid-cols-4 gap-4 text-white font-exo'>
          <div className='text-4xl rounded-lg p-10 border-2 border-solid border-black  text-center flex justify-center items-center col-span-4'>
            Single-Minded for God
          </div>
          <div className='text-4xl rounded-lg p-10 border-2 border-solid border-black  text-center flex justify-center items-center col-span-4 sm:col-span-2'>
            Missionary
          </div>
          <div className='text-4xl rounded-lg p-10 border-2 border-solid border-black  text-center flex justify-center items-center col-span-4 sm:col-span-2'>
            Model of Excellence
          </div>
          <div className='text-4xl rounded-lg p-10 border-2 border-solid border-black  text-center flex justify-center items-center col-span-4 sm:col-span-3'>
            Champion of the Poor
          </div>
          <div className='text-4xl rounded-lg p-10 border-2 border-solid border-black  text-center flex justify-center items-center col-span-4 sm:col-span-1'>
            100% Free
          </div>
          <div className='text-4xl rounded-lg p-10 border-2 border-solid border-black  text-center flex justify-center items-center col-span-4 sm:col-span-2'>
            Source of Unity in the Family
          </div>
          <div className='text-4xl rounded-lg p-10 border-2 border-solid border-black  text-center flex justify-center items-center col-span-4 sm:col-span-2'>
            Patriotic
          </div>
        </div>
      </div>

      <section className='p-4 text-center'>
        <h1 className='four text-4xl font-exo'>EPHESIANS 5: 8 – 9, 14</h1>
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

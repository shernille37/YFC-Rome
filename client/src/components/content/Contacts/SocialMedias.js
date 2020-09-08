import React, { Fragment } from 'react';

const SocialMedias = () => {
  return (
    <Fragment>
      <div className='Socials w-full bg-white shadow-lg rounded-lg border-red-500 border p-8 flex flex-col justify-between font-exo'>
        <div>
          <p className='text-center text-2xl md:text-4xl'>
            Follow us on Social Media!
          </p>
        </div>
        <div className='socialMedias'>
          <a
            href='https://www.facebook.com/profile.php?id=100007522067726'
            className='w-12 hover:text-blue-500'
            rel='noopener noreferrer'
            target='_blank'
          >
            <i className='fab fa-facebook-square pr-5 mr-5 text-4xl md:text-5xl' />
          </a>
          <p className='text-center text-lg md:text-2xl '>
            Cfc Yfc Roma (Youth For Christ)
          </p>
        </div>
        <div className='socialMedias'>
          <a
            href='https://www.instagram.com/cfcyfcroma/'
            className='w-12 hover:text-blue-500'
            rel='noopener noreferrer'
            target='_blank'
          >
            <i className='fab fa-instagram-square pr-5 mr-5 text-4xl md:text-5xl' />
          </a>
          <p className='text-center text-lg md:text-2xl'>cfcyfcroma</p>
        </div>
      </div>
    </Fragment>
  );
};

export default SocialMedias;

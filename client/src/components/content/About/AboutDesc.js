import React from 'react';
import logo from '../../../assets/Images/yfc-logo.png';

const AboutDesc = () => {
  return (
    <div className='aboutDesc lg:container lg:mx-auto lg:p-4 grid gap-3 grid-cols-1 lg:grid-cols-2'>
      <div className='flex justify-center items-center p-4'>
        <img src={logo} alt='YFC-Logo' />
      </div>

      <div className='flex justify-center md:text-lg text-center items-center p-4 font-exo'>
        CFC-Youth for Christ is a ministry under the Couples for Christ Global
        Mission Foundation which unites people especially the youth to engage in
        building relationships with other people globally and to build oneness
        in spiritual faith. Our goal is to evangelize other youths through our
        programs and to bring to life the mission and vision articulated in the
        Youth for Christ community through gateway evangelization activities
        conducted in different areas worldwide.
      </div>
    </div>
  );
};

export default AboutDesc;

import React, { Fragment, useEffect } from 'react';
import Carousel from './content/About/Carousel';
import AboutDesc from './content/About/AboutDesc';
import History from './content/About/History';
import Vision from './content/About/Vision';

const About = () => {
  useEffect(() => {
    document.title = 'YFC Rome | About';
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <div className='About'>
        <Carousel />
        <AboutDesc />
        <Vision />
        <History />
      </div>
    </Fragment>
  );
};

export default About;

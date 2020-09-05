import React, { Fragment } from 'react';
import Carousel from './content/About/Carousel';
import AboutDesc from './content/About/AboutDesc';
import History from './content/About/History';

const About = () => {
  return (
    <Fragment>
      <div className='About'>
        <Carousel />
        <AboutDesc />
        <History />
      </div>
    </Fragment>
  );
};

export default About;

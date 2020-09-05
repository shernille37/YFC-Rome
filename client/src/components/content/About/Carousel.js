import React, { Fragment } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import img1 from '../../../assets/Images/YFC/yfcImg1.jpg';
import img2 from '../../../assets/Images/YFC/yfcImg2.jpg';
import img3 from '../../../assets/Images/YFC/yfcImg3.jpg';
import img4 from '../../../assets/Images/YFC/yfcImg4.jpg';
import img5 from '../../../assets/Images/YFC/yfcImg5.jpg';

const Carousel = () => {
  const items = [img1, img2, img3, img4, img5];
  const images = items.map((item, i) => (
    <img key={i} src={item} className='sliderImg' alt='sliderImages' />
  ));

  return (
    <Fragment>
      <div className='sliderContainer relative text-center text-white flex justify-center items-center'>
        <AliceCarousel
          autoPlay={true}
          items={images}
          autoPlayInterval={2000}
          fadeOutAnimation={true}
          stopAutoPlayOnHover={false}
          infinite={true}
          touchTrackingEnabled
          buttonsDisabled
          dotsDisabled
          className='carousel'
        />
      </div>
    </Fragment>
  );
};

export default Carousel;

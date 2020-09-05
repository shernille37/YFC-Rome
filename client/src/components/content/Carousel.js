import React, { Fragment } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import img1 from '../../assets/Images/YFC/yfcImg1.jpg';
import img2 from '../../assets/Images/YFC/yfcImg2.jpg';
import img3 from '../../assets/Images/YFC/yfcImg3.jpg';
import img4 from '../../assets/Images/YFC/yfcImg4.jpg';
import img5 from '../../assets/Images/YFC/yfcImg5.jpg';

const Carousel = () => {
  const items = [img1, img2, img3, img4, img5];
  const images = items.map((item, i) => (
    <img key={i} src={item} className='sliderImg' />
  ));

  return (
    <Fragment>
      <div className='sliderContainer relative text-center text-white flex justify-center items-center'>
        <AliceCarousel
          autoPlay={true}
          items={images}
          autoPlayInterval='2000'
          fadeOutAnimation={true}
          stopAutoPlayOnHover={false}
          infinite={true}
          touchTrackingEnabled
          buttonsDisabled
          dotsDisabled
          className='carousel'
        />
        {/* <div className='text  container mx-auto p-4 w-full h-full absolute font-exo text-base md:text-2xl flex justify-center items-center sm:items-end'>
          <div className='mb-12 w-full xl:w-4/5 lg:w-4/5'>
            CFC-Youth for Christ is a ministry under the Couples for Christ
            Global Mission Foundation which unites people especially the youth
            to engage in building relationships with other people globally and
            to build oneness in spiritual faith. Our goal is to evangelize other
            youths through our programs and to bring to life the mission and
            vision articulated in the Youth for Christ community through gateway
            evangelization activities conducted in different areas worldwide.
          </div>
        </div> */}
      </div>
    </Fragment>
  );
};

export default Carousel;

import React, { useRef } from 'react';
import logo from '../../../assets/Images/YFC/yfc-current-logo.jpg';
import { annotate, annotationGroup } from 'rough-notation';

const AboutDesc = () => {
  const cfc = useRef();
  const goal = useRef();

  let cnt = 0;

  const onHover = () => {
    if (++cnt > 1) return;

    const annotateStyle = {
      animationDuration: 3000,
      padding: 6.5,
      multiline: true,
      iterations: 2,
    };

    const a1 = annotate(cfc.current, {
      type: 'underline',
      ...annotateStyle,
    });
    const a2 = annotate(goal.current, {
      type: 'underline',
      ...annotateStyle,
    });

    const ag = annotationGroup([a1, a2]);
    ag.show();
  };

  return (
    <div
      className='aboutDesc lg:container lg:mx-auto lg:p-4 grid gap-3 grid-cols-1 lg:grid-cols-2'
      onMouseEnter={onHover}
    >
      <div
        className='flex justify-center items-center p-4'
        data-aos='flip-up'
        data-aos-offset='200'
        data-aos-delay='50'
        data-aos-duration='500'
        data-aos-easing='ease-in-out'
      >
        <img src={logo} alt='YFC-Logo' width='350' />
      </div>

      <div className=' md:text-lg text-center p-4 md:pt-16 font-exo'>
        CFC-Youth for Christ is a ministry under the{' '}
        <span ref={cfc}>Couples for Christ Global Mission Foundation</span>{' '}
        which unites people especially the youth to engage in building
        relationships with other people globally and to build oneness in
        spiritual faith. Our goal is to evangelize other youths through our
        programs and to{' '}
        <span ref={goal}>
          bring to life the mission and vision articulated in the Youth for
          Christ community
        </span>{' '}
        through gateway evangelization activities conducted in different areas
        worldwide.
      </div>
    </div>
  );
};

export default AboutDesc;

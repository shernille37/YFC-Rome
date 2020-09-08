import React, { Fragment } from 'react';

const Vision = () => {
  return (
    <Fragment>
      <div className='Vision lg:container lg:mx-auto lg:p-4 grid gap-3 grid-cols-1 lg:grid-cols-2'>
        <div className='historyTitle flex justify-center items-center p-4'>
          <h1 className='font-allerta text-4xl md:text-6xl'>VISION</h1>
        </div>

        <div className='visionDesc flex justify-center text-4xl md:text-6xl text-center items-center p-4 font-lobster'>
          Being and Bringing Christ wherever we are
        </div>
      </div>
    </Fragment>
  );
};

export default Vision;

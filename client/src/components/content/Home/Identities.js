import React, { Fragment } from 'react';

const Identities = () => {
  const identities = [
    {
      title: 'Single-Minded for God',
      span: 'col-span-4',
    },
    {
      title: 'Missionary',
      span: 'col-span-2',
    },
    {
      title: 'Model of Excellence',
      span: 'col-span-2',
    },
    {
      title: 'Champion of the Poor',
      span: 'col-span-3',
    },
    {
      title: '100% Free',
      span: 'col-span-1',
    },
    {
      title: 'Source of Unity in the Family',
      span: 'col-span-2',
    },
    {
      title: 'Patriotic',
      span: 'col-span-2',
    },
  ];

  return (
    <Fragment>
      <section className='p-4'>
        <h1 className='four text-center text-xl sm:text-4xl font-allerta'>
          SEVEN IDENTITIES
        </h1>
      </section>
      <div className='pimg3 py-32'>
        <div className='container mx-auto p-4 text-center grid grid-cols-4 gap-4 text-white font-exo'>
          {identities.map((identity) => (
            <div
              className={`text-2xl md:text-4xl rounded-lg p-10 border-2 border-solid border-black  text-center flex justify-center items-center col-span-4 md:${identity.span}`}
              data-aos='fade-in'
              data-aos-offset='200'
              data-aos-delay='50'
              data-aos-duration='1000'
              data-aos-easing='ease-in-out'
            >
              {identity.title}
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Identities;

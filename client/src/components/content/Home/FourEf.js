import React, { Fragment } from 'react';

const FourEf = () => {
  const fouref = [
    {
      id: 1,
      title: 'Fun',
      desc:
        "Being young means having fun. YFC promotes and supports the dynamism of the youth's thirst to the fullest. YFC encourages fun - good, clean fun",
    },
    {
      id: 2,
      title: 'Freedom',
      desc:
        'Within the YFC community, the youth experience freedom from sins, from insecurities, as well as the freedom to express love and to become the individuals whom God mean to them',
    },
    {
      id: 3,
      title: 'Friendship',
      desc:
        'This is the time of their lives when the youth begin to form long lasting relationships with their peers. YFC encourages friendship among young people, enabling them to see God in every individual they encounter.',
    },
    {
      id: 4,
      title: 'Faith',
      desc:
        'None of the three can be fully experienced without the faith in God. In YFC, the youth are taught the catholic faith that they may better appreciate the abundant blessings they receive in their lives.',
    },
  ];

  return (
    <Fragment>
      <section className='text-center p-4'>
        <h1 className='text-xl sm:text-4xl font-allerta'>
          Youth for Christ <span className='four'>4 F's</span>
        </h1>
      </section>
      <div className='pimg2 flex text-white justify-center items-center'>
        <div className='four-ef w-full h-full px-6 py-6 text-center grid lg:grid-cols-2 md:grid-cols-1 gap-2'>
          {fouref.map((ef) => (
            <Fragment key={ef.id}>
              <div className='card w-full relative p-10 rounded-lg border-2 border-black border-solid'>
                <div className='back absolute opacity-0 p-4'>{ef.desc}</div>
                <h1 className='front text-4xl font-exo'>{ef.title}</h1>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default FourEf;

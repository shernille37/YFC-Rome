import React from 'react';

const History = () => {
  return (
    <div className='lg:container lg:mx-auto lg:p-4 grid gap-3 grid-cols-1 lg:grid-cols-2'>
      <div className='historyTitle flex justify-center items-center p-4'>
        <h1 className='font-allerta text-4xl md:text-6xl'>HISTORY</h1>
      </div>

      <div className='historyDesc flex justify-center md:text-lg text-center items-center p-4 font-exo'>
        CFC-Youth for Christ is one of the ministries of Couples for Christ
        Global Mission Foundation which was established in 1993 together with
        the ministries of Kids for Christ, Singles for Christ and Handmaids of
        the Lord. It is a Catholic charismatic community and engages in family
        life movement. It owes its existence, identity, mission and vision to
        CFC as it exists as a partner in evangelizing the young. The ministry
        has envisioned the youth to be “Young People Being and Bringing Christ
        Wherever They Are.” Through its programs, the ministry will evangelize
        other youths around the world and make them followers of Christ and to
        continue embracing the mission as God called them to be.
      </div>
    </div>
  );
};

export default History;

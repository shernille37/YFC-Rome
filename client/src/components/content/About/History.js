import React, { useRef } from 'react';
import { annotate, annotationGroup } from 'rough-notation';

const History = () => {
  const ann1 = useRef();
  const ann2 = useRef();

  let cnt = 0;
  const onHover = () => {
    if (++cnt > 1) return;

    const annotateStyle = {
      animationDuration: 3000,
      padding: 8,
      multiline: true,
      iterations: 2,
    };

    const a1 = annotate(ann1.current, {
      type: 'underline',
      ...annotateStyle,
    });
    const a2 = annotate(ann2.current, {
      type: 'underline',
      ...annotateStyle,
    });

    const ag = annotationGroup([a1, a2]);
    ag.show();
  };

  return (
    <div
      className='lg:container lg:mx-auto lg:p-4 grid gap-3 grid-cols-1 lg:grid-cols-2'
      onMouseEnter={onHover}
    >
      <div className='historyTitle flex justify-center items-center p-4'>
        <h1 className='font-allerta text-4xl md:text-6xl'>HISTORY</h1>
      </div>

      <div className='historyDesc  md:text-lg text-center  p-4 md:pt-16 font-exo'>
        CFC-Youth for Christ is one of the ministries of Couples for Christ
        Global Mission Foundation which was established in 1993 together with
        the ministries of{' '}
        <span ref={ann1}>
          Kids for Christ, Singles for Christ and Handmaids of the Lord.
        </span>{' '}
        It is a Catholic charismatic community and engages in family life
        movement. It owes its existence, identity, mission and vision to CFC as
        it exists as a partner in evangelizing the young. The ministry has
        envisioned the youth to be{' '}
        <span ref={ann2}>
          “Young People Being and Bringing Christ Wherever They Are.”
        </span>{' '}
        Through its programs, the ministry will evangelize other youths around
        the world and make them followers of Christ and to continue embracing
        the mission as God called them to be.
      </div>
    </div>
  );
};

export default History;

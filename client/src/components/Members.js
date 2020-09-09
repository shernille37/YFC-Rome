import React, { Fragment, useEffect } from 'react';
import MembersShowcase from './content/Members/MembersShowcase';
import YFCMembers from './content/Members/YFCMembers';

const Members = () => {
  useEffect(() => {
    document.title = 'YFC Rome | Members';
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <div className='Members'>
        <MembersShowcase />
        <YFCMembers />
      </div>
    </Fragment>
  );
};

export default Members;

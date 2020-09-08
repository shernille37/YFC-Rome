import React, { Fragment } from 'react';
import MembersShowcase from './content/Members/MembersShowcase';
import YFCMembers from './content/Members/YFCMembers';

const Members = () => {
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

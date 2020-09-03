import React, { Fragment } from 'react';
import logo from './yfc-logo.png';

const Logo = () => {
  return (
    <Fragment>
      <img src={logo} alt='' style={logoStyle} />
    </Fragment>
  );
};

const logoStyle = {
  width: '70px',
  marginRight: '10px',
};

export default Logo;

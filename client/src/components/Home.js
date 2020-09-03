import React, { Fragment } from 'react';
import Showcase from './layout/Showcase';
import Article from './layout/Article';

const Home = () => {
  return (
    <Fragment>
      <Showcase />
      <Article />
    </Fragment>
  );
};

export default Home;

import React, { Fragment } from 'react';
import Showcase from './content/Showcase';
import Article from './content/Article';

const Home = () => {
  return (
    <Fragment>
      <Showcase />
      <Article />
    </Fragment>
  );
};

export default Home;

import React, { Fragment } from 'react';
import Showcase from './content/Home/Showcase';
import Article from './content/Home/Article';

const Home = () => {
  return (
    <Fragment>
      <Showcase />
      <Article />
    </Fragment>
  );
};

export default Home;

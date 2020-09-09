import React, { Fragment, useEffect } from 'react';
import Showcase from './content/Home/Showcase';
import Article from './content/Home/Article';

const Home = () => {
  useEffect(() => {
    document.title = 'Youth for Christ | Rome';
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <Showcase />
      <Article />
    </Fragment>
  );
};

export default Home;

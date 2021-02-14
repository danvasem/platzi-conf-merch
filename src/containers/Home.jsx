import React from 'react';
import { Helmet } from 'react-helmet';
import Products from '../components/Products';
import initalState from '../initialState';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Platzi Conf Merch - Productos</title>
      </Helmet>
      <Products />
    </div>
  );
};

export default Home;

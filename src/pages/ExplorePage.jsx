import React from 'react';
import Category from '../components/explore/Category';
import Header from '../components/explore/Header';
import Search from '../components/explore/Search';
import Footer from '../components/layout/Footer';
import Popular from '../components/recipes/Popular';
import Vegetarian from '../components/recipes/Vegetarian';

function Explore() {
  return (
    <section>
      <Header></Header>
      <Category></Category>
      <Popular></Popular>
      <Vegetarian></Vegetarian>
      <Footer></Footer>
    </section>
  );
}

export default Explore;

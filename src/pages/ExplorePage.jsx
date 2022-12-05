import React from 'react';
import Category from '../components/explore/CuisinesNav';
import Pages from '../components/explore/Pages';
import Search from '../components/explore/Search';

function Explore() {
  return (
    <div>
      <Search></Search>
      <Category></Category>
    </div>
  );
}

export default Explore;

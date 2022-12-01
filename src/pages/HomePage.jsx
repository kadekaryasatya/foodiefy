import React from 'react';
import FeaturedRecipe from '../components/home/FeaturedRecipe';
import Hero from '../components/home/Hero';
import Subscribe from '../components/home/Subscribe';
import Footer from '../components/layout/Footer';

import ColorBlur from '../components/colorBlur/ColorBlur';

function HomePage() {
  return (
    <div>
      <ColorBlur></ColorBlur>
      <Hero></Hero>
      <FeaturedRecipe></FeaturedRecipe>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  );
}

export default HomePage;

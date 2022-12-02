import React from 'react';
import ColorBlur from '../components/colorBlur/ColorBlur';

import './About.css';

function About() {
  return (
    <div>
      <div className='about'>
        {/* <img className='about__image' src='../detail.png' alt='recipe' /> */}
        <div className='about__title'>
          <h4>About Foodiefy</h4>
          <h1>" The Best Platform To Manage Your Favorite Recipes "</h1>
        </div>

        <div className='about__features'>
          <h4>Our Features</h4>
          <div className='about__foodiefy'>
            <div className='about__foodiefy1'>
              <h2>Search</h2>
              <h3></h3>
            </div>
            <div className='about__foodiefy2'>
              <h2>Explore</h2>
              <h3></h3>
            </div>
            <div className='about__foodiefy3'>
              <h2>Create</h2>
              <h3></h3>
            </div>
          </div>
        </div>

        <div className='cooking'>
          <img className='cooking__image' src='../cooking.jpg' alt='recipe' />
          <h4>
            <span>Our Mission</span> is helps users to manage and search for recipes from around the world
          </h4>
        </div>

        <div className='our-team'>
          <h4>Our team</h4>
          <div className='our-team__body'>
            <div className='dek-arya'>
              <img className='about__image' src='../detail.png' alt='recipe' />
              <h3>Dek Arya</h3>
              <a href='https://github.com/kadekaryasatya'>github</a>
            </div>
            <div className='zulham'>
              <img className='about__image' src='../detail.png' alt='recipe' />
              <h3>Zulham</h3>
              <a href='https://github.com/kadekaryasatya'>github</a>
            </div>
            <div className='dede-oka'>
              <img className='about__image' src='../detail.png' alt='recipe' />
              <h3>Dede Oka</h3>
              <a href='https://github.com/kadekaryasatya'>github</a>
            </div>
            <div className='tri'>
              <img className='about__image' src='../detail.png' alt='recipe' />
              <h3>Tri</h3>
              <a href='https://github.com/kadekaryasatya'>github</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

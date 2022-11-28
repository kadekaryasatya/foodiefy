import React from 'react';

import './About.css';

function About() {
  return (
    <div className='about'>
      <div className='about__title'>
        <h1>About</h1>
      </div>

      <div className='about__description'>
        <p>
          <b>Foodiefy</b> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, sequi? Ut minima atque, odio eveniet beatae inventore minus. Quos tempora dolore totam facilis aperiam laboriosam quis sed! Cumque, nostrum pariatur!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, consequatur rem consectetur quisquam ipsum dignissimos exercitationem quidem autem doloribus temporibus corporis, non cumque quo iste incidunt at fugit nobis
          eaque!
        </p>
      </div>

      <div className='our-team'>
        <div className='our-team__title'>
          <h2>Our team</h2>
        </div>
        <div className='our-team__body'>
          <div className='dek-arya'>
            <h3>Dek Arya</h3>
            <a href='https://github.com/kadekaryasatya'>github</a>
          </div>
          <div className='zulham'>
            <h3>Zulham</h3>
            <a href='https://github.com/kadekaryasatya'>github</a>
          </div>
          <div className='dede-oka'>
            <h3>Dede Oka</h3>
            <a href='https://github.com/kadekaryasatya'>github</a>
          </div>
          <div className='tri'>
            <h3>Tri</h3>
            <a href='https://github.com/kadekaryasatya'>github</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

import React from 'react';
import Search from './Search';
import './Header.css';

function Header() {
  return (
    <div className='hero-explore'>
      <Search></Search>
      <div className='hero-explore__inner'>
        <h1 className='hero-explore__title'>
          Explore Recipes <br></br>Around the World
        </h1>
      </div>
    </div>
  );
}

export default Header;

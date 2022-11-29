import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ name, logout }) => {
  // const { pathname } = useLocation();

  return (
    <div className='Navbar'>
      <ul>
        <li>
          <Link to='/' className='home-nav' title='home'>
            <u>Home</u>
          </Link>
        </li>
        <li>
          <Link to='/myrecipes' title='MyRecipes'>
            <u>MyRecipes</u>
          </Link>
        </li>
        <li>
          <Link to='/about' className='about-nav' title='about'>
            <u>About Us</u>
          </Link>
        </li>

        <li>
          <Link to='/' className='logout' onClick={logout} title='logout'>
            <u>{name}</u>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

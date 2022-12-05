import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = ({ logout, name }) => {
  return (
    <nav className='navbar navbar-expand-lg'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='/'>
          Foodiefy
        </a>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link ' href='/'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/explore'>
                Explore
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/myrecipes'>
                MyRecipes
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/about'>
                About Us
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' onClick={logout} href='/'>
                {name}
              </a>
            </li>
            <li className='nav-item link-sign'>
              <a className='nav-link' href='/register' tabIndex='-1'>
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

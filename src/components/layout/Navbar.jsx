import React from 'react';
import './Navbar.css';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = ({ logout, name }) => {
  const { pathname } = useLocation();
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
              <NavLink className='nav-link ' to={'/'}>
                Home
              </NavLink>
            </li>

            <li className='nav-item'>
              <NavLink className='nav-link ' to={'/explore'}>
                Explore
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link ' to={'/myrecipes'}>
                MyRecipes
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link ' to={'/about'}>
                About Us
              </NavLink>
            </li>

            <li className='nav-item link-sign'>
              {pathname !== '/myrecipes' ? (
                <a className='nav-link' onClick={logout} href='/'>
                  {name}
                </a>
              ) : (
                <a className='nav-link' href='/register'>
                  Sign Up
                </a>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer container mt-5 w-100'>
      <div className='footer-resp row w-100 justify-content-center'>
        <div className='footer-text col-lg-6 mb-3 col-sm-12 col-md-12'>
          <h3>Foodiefy</h3>
          <p className='text-secondary'>
            Everything you need about finding <br />
            recipe will be here, where it will be easier <br />
            for you
          </p>
          <div className='icon-list'>
            <FaFacebookF></FaFacebookF>
            <FaTwitter></FaTwitter>
            <FaInstagram></FaInstagram>
          </div>
        </div>
        <div className='col-lg-6 col-sm-12 col-md-12 footer-link'>
          <div className='row'>
            <div className='col-4'>
              <h4>Recipe</h4>
              <ul>
                <Link to='/explore'>
                  <li>Popular</li>
                </Link>
                <Link to='/explore'>
                  <li>Vegetarian</li>
                </Link>
                <Link to='/explore'>
                  <li>Random</li>
                </Link>
              </ul>
            </div>
            <div className='col-4'>
              <h4>Menu</h4>
              <ul>
                <Link to='/'>
                  <li>Home</li>
                </Link>
                <Link to='/myrecipes'>
                  <li>MyRecipes</li>
                </Link>
                <Link to='/about'>
                  <li>About Us</li>
                </Link>
              </ul>
            </div>
            <div className='col-4'>
              <h4>Contact</h4>
              <ul>
                <li>Foodiefy team</li>
                <li>+62 1234 7645</li>
                <li>foodiefy@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

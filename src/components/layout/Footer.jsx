import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer container mt-5 w-100'>
      <div className='footer-resp row w-100 justify-content-center'>
        <div className='footer-text col-6'>
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
        <div className='col-6 footer-link'>
          <div className='row'>
            <div className='col-4'>
              <h4>Recipe</h4>
              <ul>
                <li>Popular</li>
                <li>Vegetarian</li>
                <li>Random</li>
              </ul>
            </div>
            <div className='col-4'>
              <h4>Menu</h4>
              <ul>
                <li>Home</li>
                <li>MyRecipes</li>
                <li>About Us</li>
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

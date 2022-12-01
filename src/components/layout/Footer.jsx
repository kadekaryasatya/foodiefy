import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='footer container mt-5 w-100'>
      <div className="row w-100 justify-content-center">
        <div className="col-6">
          <h3>Foodiefy</h3>
          <p className='text-secondary'>Everything you need about finding <br/>
            recipe will be here, where it will be easier <br/>
            for you</p>
          <div className="icon-list">
            <FaFacebookF></FaFacebookF>
            <FaTwitter></FaTwitter>
            <FaInstagram></FaInstagram>
          </div>
        </div>
        <div className="col-6 footer-link">
          <div className="row">
            <div className="col-4">
              <h4>Recipe</h4>
              <ul>
                <li>Rice</li>
                <li>Bread</li>
              </ul>
            </div>
            <div className="col-4">
              <h4>Product</h4>
              <ul>
                <li>New</li>
                <li>Popular</li>
                <li>Most Read</li>
              </ul>
            </div>
            <div className="col-4">
              <h4>Contact</h4>
              <ul>
                <li>jalan in aja dlu</li>
                <li>+62 1234 7645</li>
                <li>example@email.com</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;

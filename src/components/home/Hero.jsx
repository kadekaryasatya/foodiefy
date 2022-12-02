import React from 'react';
import './hero.css';
import { FaAngleRight, FaMapMarkerAlt } from 'react-icons/fa';

function Hero() {
  return (
    <div className='container hero-section pt-4 mt-3 w-100'>
      <div className='row w-100 justity-content-center'>
        <div className='col-md-6 hero-text'>
          <h2 className='hero-title'>
            find recipe <br />
            live <span>your dreams</span>
            <br />
            easily here
          </h2>
          <p className='hero-desc text-secondary mt-2'>
            Everything you need about finding recipe will be here, <br />
            where it will be easier for you
          </p>

          <div className='input-group w-75 mb-3'>
            <div className='icon-loc'>
              <FaMapMarkerAlt></FaMapMarkerAlt>
            </div>
            <input type='text' className='text-secondary form-control' placeholder='Search for the recipe you want!' aria-label='Search for the recipe you want!' aria-describedby='basic-addon2'></input>
            <div className='input-group-append'>
              <button href='/add' className='btn btn-outline-secondary' type='button'>
                Search <FaAngleRight></FaAngleRight>
              </button>
            </div>
          </div>
        </div>

        <div className='col-md-6'>
          <img src='/hero-img.jpg' className='img-fluid' alt='Hero-Imagefood'></img>
        </div>
      </div>
    </div>
  );
}

export default Hero;

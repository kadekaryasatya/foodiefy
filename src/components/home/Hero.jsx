import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './hero.css';
import { FaAngleRight, FaMapMarkerAlt } from 'react-icons/fa';

function Hero() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + input);
  };

  return (
    <div className='container hero-section pt-4 mt-4 w-100'>
      <div className='row w-100 justity-content-center'>
        <div className='col-md-6 hero-text'>
          <h2 className='hero-title'>
            Manage recipe <br />
            live <span>your dreams</span>
            <br />
            easily here
          </h2>
          <p className='hero-desc text-secondary mt-2'>
            Everything you need about manage recipe will be here, <br />
            where it will be easier for you
          </p>

          <form onSubmit={submitHandler}>
            <div className='input-group w-75 mb-3'>
              <div className='icon-loc'>
                <FaMapMarkerAlt></FaMapMarkerAlt>
              </div>
              <input
                type='text'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className='text-secondary form-control'
                placeholder='Search for the recipe you want!'
                aria-label='Search for the recipe you want!'
                aria-describedby='basic-addon2'
              ></input>
              <div className='input-group-append'>
                <button className='btn btn-outline-secondary'>
                  Search <FaAngleRight></FaAngleRight>
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className='col-md-6 img-hero'>
          <img src='/hero-img.jpg' className='img-fluid' alt='Hero-Imagefood'></img>
        </div>
      </div>
    </div>
  );
}

export default Hero;

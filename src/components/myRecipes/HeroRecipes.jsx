import React from 'react';
import './HeroRecipes.css';
import { FaAngleRight, FaMapMarkerAlt } from 'react-icons/fa';

function HeroRecipes() {
  return (
    <div className='container hero-section pt-3 mt-3 w-100'>
      <div className='row w-100 justity-content-center'>
        <div className='p-4 hero-text'>
          <h2 className='hero-title '>
            Create recipe <br />
            live <span>your dreams</span>
            <br />
            easily here
          </h2>
          <p className='hero-desc text-secondary mt-2'>
            Everything you need about manage recipe will be here, <br />
            where it will be easier for you
          </p>

          <div className='input-group w-100 mb-3'>
            <div className='icon-loc'>
              <FaMapMarkerAlt></FaMapMarkerAlt>
            </div>
            <input type='text' className='text-secondary form-control' placeholder='Search your recipe ...' aria-label='Search for the recipe you want!' aria-describedby='basic-addon2'></input>
            <div className='input-group-append'>
              <button className='btn btn-outline-secondary' type='button'>
                Search <FaAngleRight></FaAngleRight>
              </button>
            </div>
          </div>
        </div>

        {/* <div className='col-md-6'>
          <img src='/hero2-img.jpeg' className='img-fluid' alt='Hero-Imagefood'></img>
        </div> */}
      </div>
    </div>
  );
}

export default HeroRecipes;

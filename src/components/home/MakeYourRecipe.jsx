import React from 'react';
import { Link } from 'react-router-dom';
import './makeyourrecipe.css';

function MakeRecipe() {
  return (
    <div className='container make-recipe-section pt-4 mt-3  w-100'>
      <span className='mkrecipe-subtitle position-relative'>our features</span>
      <div className='resp row'>
        <div className='col-lg-6 col-sm-12 col-md-12'>
          <h3 className='mkrecipe-title'>Explore</h3>
          <div className='mkrecipe-title3 mt-4'>
            <p className='mkrecipe-body'>Italian cuisine is not only Pizza or Spaghetti....</p>
            <p className='mkrecipe-body'>Let's see what's cooking around the world today!</p>
            <Link to='/explore'>
              <button className='btn btn-outline-secondary' type='button'>
                Try Now
              </button>
            </Link>
          </div>
          <h4 className='mkrecipe-title2 mt-3'>List Cuisines</h4>
          <div className='row'>
            <div className='col-6'>- Italian</div>
            <div className='col-6'>- American</div>
            <div className='col-6'>- Thai</div>
            <div className='col-6'>- Japanese</div>
            <div className='col-6'>- African</div>
            <div className='col-6'>- Korean</div>
          </div>
        </div>
        <div className='col-lg-6 col-md-12 col-sm-12 mt-3 d-flex justify-content-center '>
          <img className='img-fluid' style={{ borderRadius: '20px' }} src='/images/cuisines.webp' alt='cuisines-maps' />
        </div>
      </div>
    </div>
  );
}

export default MakeRecipe;

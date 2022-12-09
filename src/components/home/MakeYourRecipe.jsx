import React from 'react';
import './makeyourrecipe.css';
import { FaNutritionix, FaHeartbeat, FaClipboardList, FaCoffee } from 'react-icons/fa';

function MakeRecipe() {
  return (
    <div className='container make-recipe-section pt-4 mt-3 mb-5 w-100'>
      <span className='mkrecipe-subtitle position-relative'>our features</span>
      <div className='row'>
        <div className='col-6'>
          <h3 className='mkrecipe-title'>Explore</h3>
          <div className='mkrecipe-title3 mt-4'>
            <p className='mkrecipe-body'>Italian cuisine is not only Pizza or Spaghetti....</p>
            <p>Let's see what's cooking around the world today!</p>
            <Link to='/explore'>
              <button className='btn btn-outline-secondary' type='button'>
                Try Now
              </button>
            </Link>
          </div>
          <h4 className='mkrecipe-title2 mt-5'>List Cuisines</h4>
          <div className='row'>
            <div className='col-6 font-weight-bold'>- Italian</div>
            <div className='col-6 font-weight-bold'>- American</div>
            <div className='col-6 font-weight-bold'>- Thai</div>
            <div className='col-6 font-weight-bold'>- Japanese</div>
            <div className='col-6 font-weight-bold'>- African</div>
            <div className='col-6 font-weight-bold'>- Korean</div>
          </div>
        </div>
        <div className='col-6 d-flex justify-content-center text-center'>
          <img className='img-fluid' style={{ borderRadius: '20px' }} src='/images/cuisines.webp' alt='cuisines-maps' />
        </div>
      </div>
    </div>
  );
}

export default MakeRecipe;

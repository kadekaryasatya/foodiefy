import React from 'react';
import './subscribe.css';
import { Link } from 'react-router-dom';

function Subscribe() {
  return (
    <div className='subscribe-myrecipe'>
      <div className='container w-100 subscribe-section p-5 '>
        <div className='row justify-content-center text-center'>
          <h2>MyRecipes</h2>
          <p>Add Your Own Recipes Now</p>

          <div className='mt-2'>
            <Link to='/myrecipes'>
              <button className='btn btn-outline-secondary' type='button'>
                + Create
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;

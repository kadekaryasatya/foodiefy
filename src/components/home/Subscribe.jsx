import React from 'react';
import './subscribe.css';
import { Link } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa';

function Subscribe() {
  return (
    <div className='container w-100 subscribe-section p-5 '>
      <div className='row justify-content-center text-center'>
        <h2>Add Your Own Recipes in Foodiefy</h2>

        <div className='mt-2'>
          <Link to='/myrecipes'>
            <button className='btn btn-outline-secondary' type='button'>
              + Create
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;

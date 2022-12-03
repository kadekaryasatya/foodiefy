import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function RecipeItemTitle({ id, title }) {
  return (
    <div className='recipe-item__title'>
      <Link to={`/notes/${id}`} title={title}>
        <img className='recipe-item__image' src='favicon.png' alt='recipe' />
        <p>{title}</p>
      </Link>
    </div>
  );
}

RecipeItemTitle.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default RecipeItemTitle;

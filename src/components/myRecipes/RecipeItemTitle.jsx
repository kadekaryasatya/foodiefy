import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function RecipeItemTitle({ id, title }) {
  return (
    <h3 className='recipe-item__title'>
      <Link to={`/notes/${id}`} title={title}>
        {title}
      </Link>
    </h3>
  );
}

RecipeItemTitle.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default RecipeItemTitle;

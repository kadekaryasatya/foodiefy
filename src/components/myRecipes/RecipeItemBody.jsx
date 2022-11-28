import React from 'react';
import PropTypes from 'prop-types';

function RecipeItemBody({ body }) {
  return <p className='recipe-item__body'>{body}</p>;
}

RecipeItemBody.propTypes = {
  body: PropTypes.string.isRequired,
};

export default RecipeItemBody;

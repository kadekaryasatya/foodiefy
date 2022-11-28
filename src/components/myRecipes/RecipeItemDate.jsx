import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../../utils/api';

function RecipeItemDate({ date }) {
  return <p className='recipe-item__date'>{showFormattedDate(date)}</p>;
}

RecipeItemDate.propTypes = {
  date: PropTypes.string.isRequired,
};

export default RecipeItemDate;

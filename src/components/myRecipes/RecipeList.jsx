import React from 'react';
import PropTypes from 'prop-types';
import RecipeItem from './RecipeItem';

function RecipeList({ notes }) {
  return (
    <section className='note-list'>
      {notes.map((recipe) => (
        <RecipeItem key={recipe.id} id={recipe.id} {...recipe} />
      ))}
    </section>
  );
}

RecipeList.propTypes = {
  // onDelete: PropTypes.func.isRequired,
  // onActive: PropTypes.func.isRequired,
  notes: PropTypes.oneOfType([PropTypes.array]).isRequired,
};

export default RecipeList;

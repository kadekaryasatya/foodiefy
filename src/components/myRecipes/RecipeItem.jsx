import React from 'react';
import PropTypes from 'prop-types';
import RecipeItemTitle from './RecipeItemTitle';
// import RecipeItemBody from './RecipeItemBody';te
import RecipeItemDate from './RecipeItemDate';

function RecipeItem({ id, title, body, createdAt }) {
  return (
    <div className='recipe-item'>
      <img className='recipe-item__image' src='favicon.png' alt='recipe' />
      <div className='recipe-item__content'>
        <RecipeItemTitle key={id} id={id} title={title} />
        <RecipeItemDate date={createdAt} />
        {/* <RecipeItemBody body={body} /> */}
      </div>
      {/* <div className='note-item__action'>
        <DeleteButton id={id} onDelete={onDelete} />
        <button title={archived ? 'Active' : 'Archive'} onClick={() => buttonId(id)} className='note-item__archive-button'>
          <IoMdArchive />
        </button>
      </div> */}
    </div>
  );
}

RecipeItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  // archived: PropTypes.bool.isRequired,
  // onDelete: PropTypes.func.isRequired,
  createdAt: PropTypes.string.isRequired,
  // buttonId: PropTypes.func.isRequired,
  id: PropTypes.string,
};

export default RecipeItem;

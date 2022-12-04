import React from 'react';
import PropTypes from 'prop-types';
import { AiFillDelete } from 'react-icons/ai';

import './DeleteButton.css';

function DeleteButton({ id, onDelete }) {
  return (
    <button className='note-item__delete-button' title='Delete' onClick={() => onDelete(id)}>
      <AiFillDelete />
      Delete
    </button>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default DeleteButton;

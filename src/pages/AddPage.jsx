import React, { useContext } from 'react';
import { addNote } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import './AddPage.css';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function AddPage() {
  const [title, onTitleChange] = useInput('');
  const [body, onBodyChange] = useInput('');
  const limit = 50;

  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const handleSubmit = (e) => {
    e.preventDefault();

    /**
     * Addrecipe
     */
    addNote({ title, body }).then((res) => {
      if (!res.error) {
        navigate('/myrecipes');
        MySwal.fire({
          title: <strong>Success</strong>,
          html: <i>Your recipe has been submited successfuly</i>,
          icon: 'success',
        });
      }
    });
  };

  return (
    <div className='form-input' id='form-input'>
      <h2>Add Recipe</h2>
      <form className='recipe-input' onSubmit={handleSubmit}>
        <div className='recipe-input__image-box'>
          <img className='recipe-input__image' src='../detail.png' alt='recipe' />
        </div>
        <div className='recipe-input__form'>
          <h4>Title</h4>
          <input className='recipe-input__title' type='text' placeholder='Title of Recipe' value={title} id='title' onChange={onTitleChange} required />
          <p className='recipe-input__title__char-limit'>{limit - title.length} remaining character</p>
          <h4>Description</h4>
          <textarea placeholder='Instruction or Ingredient' value={body} onChange={onBodyChange} required />
          <button type='submit'>Add</button>\
        </div>
      </form>
    </div>
  );
}

export default AddPage;

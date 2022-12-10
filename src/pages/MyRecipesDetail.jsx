import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getNotes, getActiveNotes, deleteNote } from '../utils/api';
import { showFormattedDate } from '../utils/api';
import NotFound from './NotFound';
import Popular from '../components/recipes/Popular';
import DeleteButton from '../components/myRecipes/DeleteButton';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/layout/Footer';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import './MyRecipesDetail.css';

function MyRecipesDetail() {
  const [recipe, setRecipe] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    getNotes(id).then(({ data }) => {
      setRecipe(data);
    });
  }, [id]);

  async function onDeleteHandler(id) {
    MySwal.fire({
      title: 'Are you sure?',
      text: 'You want delete this recipe?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteNote(id);
        navigate('/myrecipes');
        const { data } = getActiveNotes();
        setRecipe(data);
        Swal.fire('Deleted!', 'Your Recipe has been deleted.', 'success');
      }
    });
  }

  if (!recipe) {
    return <NotFound />;
  }
  return (
    <section>
      <div className='myrecipes-detail'>
        <div className='myrecipes-detail__content'>
          <div className='myrecipes-detail__image-box'>
            <img className='myrecipes-detail__image' src='../detail.png' alt='recipe' />
          </div>
          <div>
            <h2 className='myrecipes-detail__title'>{recipe.title}</h2>
            <p className='myrecipes-detail__createdAt'>{showFormattedDate(recipe.createdAt)}</p>
            <p>⭐️⭐️⭐️⭐️⭐️</p>
            <DeleteButton id={id} onDelete={onDeleteHandler} />
          </div>
        </div>
        <h4>Description</h4>
        <div className='myrecipes-detail__body'>
          <p>{recipe.body}</p>
        </div>
      </div>
      <Popular />
      <Footer />
    </section>
  );
}

export default MyRecipesDetail;

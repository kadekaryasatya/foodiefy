import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import { getNotes, getActiveNotes, deleteNote } from '../utils/api';
import { showFormattedDate } from '../utils/api';
import NotFound from './NotFound';
import Popular from '../components/recipes/Popular';
import DeleteButton from '../components/myRecipes/DeleteButton';
import { useNavigate } from 'react-router-dom';

// import LocaleContext from '../contexts/LocaleContext';
// import { ClimbingBoxLoader } from 'react-spinners';

import './MyRecipesDetail.css';

function MyRecipesDetail() {
  const [recipe, setRecipe] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  // const { locale } = useContext(LocaleContext);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    getNotes(id).then(({ data }) => {
      setRecipe(data);
    });
  }, [id]);

  async function onDeleteHandler(id) {
    await deleteNote(id);
    navigate('/myrecipes');
    // update the note state from api.js
    const { data } = await getActiveNotes();
    setRecipe(data);
  }

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  if (!recipe) {
    return <NotFound />;
  }
  return (
    <section>
      {/* <Link to='/' title='Back'>
        <HiArrowLeft /> {locale === 'id' ? 'Kembali' : 'Back'}
      </Link> */}
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
    </section>
  );
}

export default MyRecipesDetail;

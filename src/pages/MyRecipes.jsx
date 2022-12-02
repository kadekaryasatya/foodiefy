import React, { useEffect, useState, useContext } from 'react';
import RecipeList from '../components/myRecipes/RecipeList';
// import SearchBar from "../components/layout/SearchBar";
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import { MdOutlineAddCircle } from 'react-icons/md';
import { getActiveNotes, deleteNote, archiveNote } from '../utils/api';
import SearchBar from '../components/layout/SearchBar';
// import LocaleContext from '../contexts/LocaleContext';
// import { PacmanLoader } from 'react-spinners';
import HeroRecipes from '../components/myRecipes/HeroRecipes';
import Popular from '../components/recipes/Popular';

import './MyRecipes.css';

function MyRecipes() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get('keyword') || '';
  });

  // const { locale } = useContext(LocaleContext);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
    });
  }, []);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  // async function onDeleteHandler(id) {
  //   await deleteNote(id);
  //   // update the note state from api.js
  //   const { data } = await getActiveNotes();
  //   setNotes(data);
  // }

  // async function onArchiveHandler(id) {
  //   await archiveNote(id);
  //   const { data } = await getActiveNotes();
  //   setNotes(data);
  // }

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredRecipes = notes.filter((recipe) => {
    return recipe.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <section>
      <div class='hero'>
        <div class='hero__inner'>
          <h1 class='hero__title'>
            Create Your<span> Own </span>Recipes
          </h1>
          <Link to='/add'>
            <button className='btn btn-outline-secondary' type='button'>
              Add +
            </button>
          </Link>

          {/* <p class='hero__tagline'>Kumpulan Restaurant terbaik di Indonesia</p> */}
        </div>
      </div>
      <div className='active-recipes'>
        <div className='active-recipes__title'>
          <h3>My recipes</h3>
        </div>
        {/* <div className='active-recipes__header'>
          <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
        </div> */}
        {notes.length !== 0 ? <RecipeList notes={filteredRecipes} /> : <h5 className=''>No Recipes Here....</h5>}
      </div>
      <Popular />
    </section>
  );
}

export default MyRecipes;

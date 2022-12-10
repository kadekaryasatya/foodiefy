import React, { useEffect, useState } from 'react';
import RecipeList from '../components/myRecipes/RecipeList';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getActiveNotes } from '../utils/api';
import SearchBar from '../components/myRecipes/SearchBar';

import { PacmanLoader } from 'react-spinners';
import './MyRecipes.css';
import Footer from '../components/layout/Footer';
import Popular from '../components/recipes/Popular';

function MyRecipes() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get('keyword') || '';
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredRecipes = notes.filter((recipe) => {
    return recipe.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <section>
      <div className='hero'>
        <div className='hero__inner'>
          <h1 className='hero__title'>Create Your Own Recipes</h1>
          <Link to='/add'>
            <button className='button-add' type='button'>
              + Add Recipes
            </button>
          </Link>
        </div>
      </div>

      <div className='active-recipes'>
        <div className='active-recipes__title'>
          <h3>My recipes</h3>
          <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
        </div>
        {loading ? (
          <div className='loading'>
            <PacmanLoader color={'#10b981'} loading={loading} />
          </div>
        ) : (
          <div>{notes.length !== 0 ? <RecipeList notes={filteredRecipes} /> : <h5 className=''>No Recipes Here....</h5>}</div>
        )}
      </div>

      <Popular />
      <Footer />
    </section>
  );
}

export default MyRecipes;

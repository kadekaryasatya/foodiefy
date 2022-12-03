import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Popular.css';

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch('https://api.spoonacular.com/recipes/random?apiKey=25fdc99073454df1a6207314399886ee&number=4');
    const data = await api.json();
    console.log(data);
    setPopular(data.recipes);
  };

  return (
    <div className='popular'>
      <h3 className='popular__label'> Popular Recipes</h3>
      <div className='popular-list'>
        {popular.map((recipe) => {
          return (
            <article className='popular-item' key={recipe.id}>
              <div className='popular-item__title'>
                <Link to={`/recipe/${recipe.id}`}>
                  <img className='popular-item__thumbnail' src={recipe.image} alt={recipe.title} />
                  <p>{recipe.title}</p>
                </Link>
              </div>
              <p className='popular-item__source'>{recipe.sourceName}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Popular;

import React, { useEffect, useState } from 'react';
import './Popular.css';

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch('https://api.spoonacular.com/recipes/random?apiKey=39b73cc197374a43b03259265314bf57&number=20');
    const data = await api.json();
    console.log(data);
    setPopular(data.recipes);
  };

  return (
    <div className='popular'>
      {popular.map((recipe) => {
        return (
          <article className='popular-item' key={recipe.id}>
            <img className='popular-item__thumbnail' src={recipe.image} alt={recipe.title} />
            <div className='popular-item__content'>
              <h3 className='popular-item__title'>{recipe.title}</h3>
              <span className='popular-item__rating'>{recipe.healthScore}</span>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Popular;

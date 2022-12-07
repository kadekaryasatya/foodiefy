import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Vegetarian.css';

function Vegetarian() {
  const [vegetarian, setVegetarian] = useState([]);

  useEffect(() => {
    getVegetarian();
  }, []);

  const getVegetarian = async () => {
    const api = await fetch('https://api.spoonacular.com/recipes/random?apiKey=0f992e4eda01432b9170203d0eae7eab&tags=vegetarian&number=4');
    const data = await api.json();
    console.log(data);
    setVegetarian(data.recipes);
  };

  return (
    <div className='vegetarian'>
      <h3 className='vegetarian__label'> Vegetarian Recipes</h3>
      <div className='vegetarian-list'>
        {vegetarian.map((recipe) => {
          return (
            <article className='vegetarian-item' key={recipe.id}>
              <div className='vegetarian-item__title'>
                <Link to={`/recipe/${recipe.id}`}>
                  <img className='vegetarian-item__thumbnail' src={recipe.image} alt={recipe.title} />
                  <p>{recipe.title}</p>
                </Link>
              </div>
              <p className='vegetarian-item__source'>{recipe.sourceName}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Vegetarian;

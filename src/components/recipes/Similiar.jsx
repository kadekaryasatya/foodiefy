import React, { useEffect, useState } from 'react';
import './Similiar.css';

function Similiar() {
  const [similiar, setSimiliar] = useState([]);

  useEffect(() => {
    getSimiliar();
  }, []);

  const getSimiliar = async () => {
    const api = await fetch('https://api.spoonacular.com/recipes/random?apiKey=39b73cc197374a43b03259265314bf57&number=20');
    const data = await api.json();
    console.log(data);
    setSimiliar(data.recipes);
  };

  return (
    <div className='similiar'>
      <h3 className='similiar__label'> 20 similiar Recipes</h3>
      <div className='similiar-list'>
        {similiar.map((recipe) => {
          return (
            <article className='similiar-item' key={recipe.id}>
              <img className='similiar-item__thumbnail' src={recipe.image} alt={recipe.title} />
              <div className='similiar-item__content'>
                <h3 className='similiar-item__title'>{recipe.title}</h3>
                {/* <span className='similiar-item__rating'>{recipe.healthScore}</span> */}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Similiar;

import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Category from './CuisinesNav';

function Cuisine() {
  const params = useParams();

  const [cuisine, setCuisine] = useState([]);
  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  const getCuisine = async (names) => {
    const cuisineLocal = localStorage.getItem(`${names}`);
    if (cuisineLocal) {
      setCuisine(JSON.parse(cuisineLocal));
    } else {
      const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=39b73cc197374a43b03259265314bf57&number=10&cuisine=${names}`);
      const data = await res.json();
      localStorage.setItem(`${names}`, JSON.stringify(data.results));
      setCuisine(data.results);
      console.log(data);
    }
  };

  return (
    <section>
      <Category></Category>
      <div className='cuisines'>
        <div className='cuisines-list'>
          {cuisine.map((item) => {
            return (
              <article className='cuisines-item' key={item.id}>
                <Link to={'/recipe/' + item.id}>
                  <img src={item.image} alt={item.title} />
                  <h4>{item.title}</h4>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Cuisine;

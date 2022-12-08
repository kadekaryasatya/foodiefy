import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Category from './Category';
import Popular from '../recipes/Popular';
import Header from './Header';
import Vegetarian from '../recipes/Vegetarian';

import './Cuisine.css';
import Footer from '../layout/Footer';

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
      const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=25fdc99073454df1a6207314399886ee&number=1&cuisine=${names}`);
      const data = await res.json();
      localStorage.setItem(`${names}`, JSON.stringify(data.results));
      setCuisine(data.results);
      console.log(res);
    }
  };

  return (
    <section>
      <Header></Header>

      <Category></Category>
      <div className='cuisines'>
        <h3 className='cuisines__label'>Your Picks</h3>
        <div className='cuisines-list'>
          {cuisine.map((item) => {
            return (
              <article className='cuisines-item' key={item.id}>
                <div className='cuisines-item__title'>
                  <Link to={'/recipe/' + item.id}>
                    <img className='cuisines-item__thumbnail' src={item.image} alt={item.title} />
                    <p>{item.title}</p>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <Popular></Popular>
      <Vegetarian></Vegetarian>
      <Footer></Footer>
    </section>
  );
}

export default Cuisine;

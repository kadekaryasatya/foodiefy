import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './RecipesDetail.css';
import Popular from '../components/recipes/Popular';

function Detail() {
  const [details, setDetails] = useState({});

  const { id } = useParams();

  const getDetails = async () => {
    const resp = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=39b73cc197374a43b03259265314bf57`);
    const data = await resp.json();
    return data;
  };

  useEffect(() => {
    let isMounted = true;
    getDetails().then((data) => {
      if (isMounted) setDetails(data);
      console.log(data);
    });
    return () => {
      isMounted = false;
    };
  }, [id]);

  return (
    <section>
      <div className='recipe-detail'>
        <div className='recipe-detail__content'>
          <div className='recipe-detail__image-box'>
            <img className='recipe-detail__image' src={details.image} alt={details.title} />
          </div>
          <div>
            <h2 className='recipe-detail__title'>{details.title}</h2>
            <p className='recipe-detail__source'>{details.sourceName}</p>
            <div className='recipe-detail__item'>
              <div className='ready'>
                <span>{details.readyInMinutes}</span>
                <p>Minutes</p>
              </div>
              <div className='price'>
                <span>${details.pricePerServing} </span>
                <p>Per serving</p>
              </div>
              <div className='health'>
                <span>{details.healthScore}/100</span>
                <p>Health Score</p>
              </div>
            </div>
          </div>
        </div>

        <div className='recipe-detail__description'>
          <h4>Summary</h4>
          <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
        </div>
        <div>
          <div className='recipe-detail__content'>
            <div className='recipe-detail__instructions'>
              <div className='instructions__title'>
                <h4>Instructions</h4>
              </div>
              <div className='instructions__body'>
                <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
              </div>
            </div>

            <div className='recipe-detail__ingredients'>
              <div className='ingredients__title'>
                <h4>Ingredients</h4>
              </div>
              <div className='ingredients__body'>
                <ul></ul>
              </div>
            </div>
          </div>
        </div>

        <div className='recipe-detail__title'></div>
      </div>
      <Popular />
    </section>
  );
}

export default Detail;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './featuredRecipe.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

//Bootstrap components
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { PacmanLoader } from 'react-spinners';

function FeaturedRecipe() {
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch('https://api.spoonacular.com/recipes/random?apiKey=39b73cc197374a43b03259265314bf57&number=8');
    const data = await api.json();
    setPopular(data.recipes);
  };

  const [matches, setMatches] = useState(window.matchMedia('(max-width: 992px)').matches);
  useEffect(() => {
    window.matchMedia('(max-width: 992px)').addEventListener('change', (e) => setMatches(e.matches));
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className='featured-recipe__background'>
      <div className='container featured-section'>
        <span className='our-recomend position-relative'>our recomendation</span>
        <div className='row mb-3'>
          <div className='col-lg-4 col-sm-12 col-md-12'>
            <h3 className='featured-title'>Featured Recipe</h3>
          </div>

          <div className='col-lg-4 col-sm-12 col-md-12'></div>
        </div>
        {loading ? (
          <div className='loading'>
            <PacmanLoader color={'#10b981'} loading={loading} />
          </div>
        ) : (
          <Swiper spaceBetween={40} slidesPerView={matches ? '2' : '4'} navigation={true} modules={[Navigation]}>
            {popular.map((recipe) => {
              return (
                <SwiperSlide key={recipe.id}>
                  <Card style={{ border: 'none' }}>
                    <Card.Img variant='top' src={recipe.image} alt={recipe.title} />
                    <Card.Body style={{ padding: '0.5rem 0 0 0' }}>
                      <Card.Title> {recipe.title}</Card.Title>
                      <Card.Text>{recipe.sourceName}</Card.Text>
                      <Link to={`/recipe/${recipe.id}`}>
                        <Button size='sm' className='btn-featured-recipe'>
                          Check Recipe
                        </Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>
    </div>
  );
}
export default FeaturedRecipe;

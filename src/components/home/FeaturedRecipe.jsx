import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './featuredRecipe.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function FeaturedRecipe() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch('https://api.spoonacular.com/recipes/random?apiKey=0f992e4eda01432b9170203d0eae7eab&number=6');
    const data = await api.json();
    console.log(data);
    setPopular(data.recipes);
  };

  const [matches, setMatches] = useState(window.matchMedia('(max-width: 992px)').matches);

  useEffect(() => {
    window.matchMedia('(max-width: 992px)').addEventListener('change', (e) => setMatches(e.matches));
  }, []);

  return (
    <>
      <div className='container featured-section'>
        <span className='our-recomend position-relative'>our recomendation</span>
        <div className='row mb-3'>
          <div className='col-lg-4 col-sm-12 col-md-12'>
            <h3 className='featured-title'>Featured Recipe</h3>
          </div>
          <div className='col-lg-4 col-sm-12 col-md-12'>
            <Button className='btn-featured mx-2 active-btn'>Rice</Button>
            <Button className='btn-featured mx-2'>Rice</Button>
            <Button className='btn-featured mx-2'>Rice</Button>
            <Button className='btn-featured mx-2'>Rice</Button>
          </div>
          <div className='col-lg-4 col-sm-12 col-md-12'></div>
        </div>
        <Swiper spaceBetween={25} slidesPerView={4} navigation={true} modules={[Navigation]} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}>
          {popular.map((recipe) => {
            return (
              <SwiperSlide key={recipe.id}>
                <Card style={{ border: 'none' }}>
                  <Card.Img variant='top' src={recipe.image} alt={recipe.title} />
                  <Card.Body style={{ padding: '0.5rem 0 0 0' }}>
                    <Card.Title> {recipe.title}</Card.Title>
                    <Card.Text>{recipe.sourceName}</Card.Text>
                    <Link to={`/recipe/${recipe.id}`}>
                      <Button size='sm' style={{ backgroundColor: 'rgb(16,185,129)' }}>
                        Check Recipe
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
export default FeaturedRecipe;

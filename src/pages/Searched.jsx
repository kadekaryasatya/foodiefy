import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Search from '../components/explore/Search';
import Footer from '../components/layout/Footer';
import Popular from '../components/recipes/Popular';

import { PacmanLoader } from 'react-spinners';
import './Searched.css';

function Searched() {
  const [searched, setSearched] = useState([]);

  const params = useParams();
  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const getSearched = async (names) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=39b73cc197374a43b03259265314bf57&number=8&query=${names}`);
    const res = await data.json();
    setSearched(res.results);
  };

  return (
    <section>
      <Search></Search>

      <div className='searched'>
        <h3 className='searched__label'>Searched Recipes </h3>
        {loading ? (
          <div className='loading'>
            <PacmanLoader color={'#10b981'} loading={loading} />
          </div>
        ) : (
          <div>
            {searched.length > 0 ? (
              <div className='searched-list'>
                {searched.map((item) => {
                  return (
                    <article className='searched-item' key={item.id}>
                      <div className='searched-item__title'>
                        <Link to={'/recipe/' + item.id}>
                          <img className='searched-item__thumbnail' src={item.image} alt={item.title} />
                          <p>{item.title}</p>
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <h5 className='no-result'>Sorry, Recipe Not Found</h5>
            )}
          </div>
        )}
      </div>

      <Popular> </Popular>
      <Footer></Footer>
    </section>
  );
}

export default Searched;

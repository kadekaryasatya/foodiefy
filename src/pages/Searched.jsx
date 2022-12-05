import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Search from '../components/explore/Search';

function Searched() {
  const [searched, setSearched] = useState([]);
  const params = useParams();
  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  const getSearched = async (names) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=39b73cc197374a43b03259265314bf57&number=4&query=${names}`);
    const res = await data.json();
    setSearched(res.results);
  };
  return (
    <div>
      <Search></Search>
      <div className='searched'>
        {searched.map((item) => {
          return (
            <article className='searched-item' key={item.id}>
              <Link to={'/recipe/' + item.id}>
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Searched;

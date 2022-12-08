import { NavLink } from 'react-router-dom';
import './Category.css';

const Category = () => {
  return (
    <div className='category'>
      <NavLink className='category-nav' to={'/cuisines/Italian'}>
        <img src='/images/italia.jpg' className='category-img' alt='italian'></img>
        <h4>Italian</h4>
      </NavLink>
      <NavLink className='category-nav' to={'/cuisines/American'}>
        <img src='/images/american.jpg' className='category-img' alt='american'></img>
        <h4>American</h4>
      </NavLink>
      <NavLink className='category-nav' to={'/cuisines/Thai'}>
        <img src='/images/thailand.jpeg' className='category-img' alt='thailand'></img>
        <h4>Thai</h4>
      </NavLink>
      <NavLink className='category-nav' to={'/cuisines/Japanese'}>
        <img src='/images/japanese.jpeg' className='category-img' alt='japanese'></img>
        <h4>Japanese</h4>
      </NavLink>
      <NavLink className='category-nav' to={'/cuisines/African'}>
        <img src='/images/african.jpeg' className='category-img' alt='african'></img>
        <h4>African</h4>
      </NavLink>
      <NavLink className='category-nav' to={'/cuisines/Korean'}>
        <img src='/images/korean.jpeg' className='category-img' alt='korean'></img>
        <h4>Korean</h4>
      </NavLink>
    </div>
  );
};

export default Category;

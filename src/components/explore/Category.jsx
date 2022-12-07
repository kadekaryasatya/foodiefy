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
        <h4>American</h4>
      </NavLink>
      <NavLink className='category-nav' to={'/cuisines/Thai'}>
        <h4>Thai</h4>
      </NavLink>
      <NavLink className='category-nav' to={'/cuisines/Japanese'}>
        <h4>Japanese</h4>
      </NavLink>
      <NavLink className='category-nav' to={'/cuisines/African'}>
        <h4>African</h4>
      </NavLink>
    </div>
  );
};

export default Category;

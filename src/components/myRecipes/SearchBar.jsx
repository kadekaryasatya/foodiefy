import React, { useContext } from 'react';
import PropTypes from 'prop-types';

function SearchBar({ keyword, keywordChange }) {
  return <input className='search-bar' type='text' placeholder='Search Myrecipe...' value={keyword} onChange={(event) => keywordChange(event.target.value)} />;
}

SearchBar.propType = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;

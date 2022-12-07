import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.css';

function Search() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + input);
  };
  return (
    <form className='search-explore' onSubmit={submitHandler}>
      <div className='search-explore__content'>
        <FaSearch />
        <input className='search-explore__input ' type='text' placeholder='Search your recipe here...' value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
    </form>
  );
}

export default Search;

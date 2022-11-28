import React, { useEffect, useState, useContext } from 'react';
import RecipeList from '../components/myRecipes/RecipeList';
// import SearchBar from "../components/layout/SearchBar";
// import { useSearchParams } from "react-router-dom";
import { Link } from 'react-router-dom';
// import { MdOutlineAddCircle } from 'react-icons/md';
import { getActiveNotes, deleteNote, archiveNote } from '../utils/api';
// import LocaleContext from '../contexts/LocaleContext';
// import { PacmanLoader } from 'react-spinners';

function MyRecipes() {
  // const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = useState([]);
  // const [keyword, setKeyword] = useState(() => {
  //   return searchParams.get('keyword') || '';
  // });
  // const { locale } = useContext(LocaleContext);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
    });
  }, []);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  // async function onDeleteHandler(id) {
  //   await deleteNote(id);
  //   // update the note state from api.js
  //   const { data } = await getActiveNotes();
  //   setNotes(data);
  // }

  // async function onArchiveHandler(id) {
  //   await archiveNote(id);
  //   const { data } = await getActiveNotes();
  //   setNotes(data);
  // }

  // function onKeywordChangeHandler(keyword) {
  //   setKeyword(keyword);
  //   setSearchParams({ keyword });
  // }

  // const filteredNotes = notes.filter((note) => {
  //   return note.title.toLowerCase().includes(keyword.toLowerCase());
  // });

  return (
    <section>
      <div id='active-recipes'>
        <h2>
          <u>My Recipes</u>
        </h2>
        {notes.length !== 0 ? <RecipeList /> : <h5 className=''>No Recipes Here....</h5>}
      </div>
    </section>
  );
}

export default MyRecipes;

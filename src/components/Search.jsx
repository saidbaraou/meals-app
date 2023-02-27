import { useState } from 'react';
import { useGlobalContext } from '../context';

const Search = () => {
  const { search } = useGlobalContext();
  return (
    <header className="search-container">
      <form>
        <input className="form-input" type="text"></input>
        <button className="btn" type="submit">
          Search
        </button>
        <button className="btn btn-hipster" type="btn">
          Surprise me !
        </button>
      </form>
    </header>
  );
};

export default Search;

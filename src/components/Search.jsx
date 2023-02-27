import { useState } from 'react';
import { useGlobalContext } from '../context';

const Search = () => {
  return (
    <header className="search-container">
      <form>
        <input
          className="form-input"
          type="text"
          placeholder="Search a meal"
        ></input>
        <button className="btn" type="submit">
          Search
        </button>
        <button className="btn btn-hipster" type="button ">
          Surprise me !
        </button>
      </form>
    </header>
  );
};

export default Search;

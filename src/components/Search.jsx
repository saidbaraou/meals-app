import { useState } from 'react';
import { useGlobalContext } from '../context';

const Search = () => {
  const { setSearchTerm, fetchRandomMeal } = useGlobalContext();
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setSearchTerm(text);
      setText('');
    }
  };

  return (
    <header className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          onChange={handleChange}
          value={text}
          placeholder="Search a meal"
        ></input>
        <button className="btn" type="submit">
          Search
        </button>
        <button
          className="btn btn-hipster"
          type="button"
          onClick={fetchRandomMeal}
        >
          Surprise me !
        </button>
      </form>
    </header>
  );
};

export default Search;

import { useState, useContext } from 'react';
import reactLogo from './assets/react.svg';
import Favorites from './components/Favorites';
import Meals from './components/Meals';
import Modal from './components/Modal';
import Search from './components/Search';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <Search />
        {/* <Favorites /> */}
        <Meals />
        {/* <Modal /> */}
      </main>
    </div>
  );
}

export default App;

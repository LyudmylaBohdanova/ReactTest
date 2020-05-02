import React from 'react';
import './Main.css';
import JokeList from '../Joke/JokeList';

function Main() {
  return (
    <div className="Main">
      <React.StrictMode>
        <JokeList />
      </React.StrictMode>
    </div>
  );
}

export default Main;

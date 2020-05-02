import React from 'react';
import './Joke.css';

function Joke(props) {
  return (
    <div className="Joke">
        <p>{!props.info.question?props.info.punchLine:props.info.question}</p>
    </div>
  );
}

export default Joke;

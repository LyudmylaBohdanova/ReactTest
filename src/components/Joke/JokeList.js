import React from 'react';
import Joke from './Joke'
import {jokeData} from './jokeData';

function JokeList() {
    return(
    <div className="jokeList">
        {jokeData.map(joke => <Joke info={joke}/>)}
    </div>
    );
}

export default JokeList;

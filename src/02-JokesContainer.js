import React, { Component } from 'react';
import './02-JokesContainer.css';
import Jokes from './03-Jokes.js';

class JokesContainer extends Component {

    render() {
        return (
            <div className='JokesContainer'>
                <Jokes></Jokes>
                <Jokes></Jokes>
                <Jokes></Jokes>
                <Jokes></Jokes>
                <Jokes></Jokes>
            </div>
        )
    }
}
export default JokesContainer;
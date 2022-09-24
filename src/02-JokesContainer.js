import React, { Component } from 'react';
import './02-JokesContainer.css';
import Jokes from './03-Jokes.js';

class JokesContainer extends Component {

    render() {
        return (
            // <div className='JokesContainer'>
            //     {this.props.jokes.map(joke => (
            //         <Jokes rating={joke.rating} joke={joke.joke} key={joke.key}></Jokes>
            //     ))}
            // </div>
            // <div className='JokesContainer'>
            //     {this.props.jokes.map(joke => (
            //         <p>{joke.joke}</p>
            //     ))}
            // </div>
            <div className='JokesContainer'>
                {this.props.jokes.map(joke => (
                    <Jokes rating={joke.rating} thejoke={joke.joke}></Jokes>
                ))}
            </div>
        )
    }
}
export default JokesContainer;
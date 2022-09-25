import React, { Component } from 'react';
import './02-JokesContainer.css';
import Jokes from './03-Jokes.js';
import Loader from './05-Loader.js';

class JokesContainer extends Component {

    render() {
        let componentToRender;
        if (this.props.loader === true) {
            componentToRender = <Loader></Loader>
        } else {
            componentToRender =
                this.props.jokes.map(joke => (
                    <Jokes rating={joke.rating} thejoke={joke.joke} key={joke.id} id={joke.id} changeRating={this.props.handleRating}></Jokes>
                ))
        }
        return (
            <div className='JokesContainer'>
                {
                    componentToRender
                }
            </div>
        )
    }
}
export default JokesContainer;
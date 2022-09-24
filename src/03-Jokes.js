import React, { Component } from 'react';
import './03-Jokes.css';
import Emoji from './Images/emoji_5.png'
import Arrow from './Images/arrow.png'

class Jokes extends Component {

    render() {
        return (
            <div className='Jokes'>
                <div className='Jokes-RatingContainer'>
                    <img src={Arrow} alt="" className='Jokes-RatingArrow Jokes-RatingArrowUp' />
                    <div className='Jokes-RatingNumberContainer'><p>1</p></div>
                    <img src={Arrow} alt="" className='Jokes-RatingArrow Jokes-RatingArrowDown' />
                </div>
                <div className='Jokes-JokeContainer'>
                    <p>I am a dad joke</p>
                </div>

                <img src={Emoji} alt="hi" className='Jokes-RatingEmoji' />
            </div>
        )
    }
}
export default Jokes;
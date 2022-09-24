import React, { Component } from 'react';
import './03-Jokes.css';
// import Emoji from './Images/emoji_5.png'
import Arrow from './Images/arrow.png'
import Emoji1 from './Images/emoji_1.png'
import Emoji2 from './Images/emoji_2.png'
import Emoji3 from './Images/emoji_3.png'
import Emoji4 from './Images/emoji_4.png'
import Emoji5 from './Images/emoji_5.png'
import EmojiMain from './Images/emoji_main.png'

class Jokes extends Component {
    constructor(props) {
        super(props);
        this.getRatingEmoji = this.getRatingEmoji.bind(this);
    };
    getRatingEmoji(rating) {
        switch (rating) {
            case 1:
                return Emoji1
            case 2:
                return Emoji2
            case 3:
                return Emoji3
            case 4:
                return Emoji4
            case 5:
                return Emoji5
            default:
                return EmojiMain
        }
    }
    render() {
        return (
            <div className='Jokes'>
                <div className='Jokes-RatingContainer'>
                    <img src={Arrow} alt="" className='Jokes-RatingArrow Jokes-RatingArrowUp' />
                    <div className='Jokes-RatingNumberContainer'><p>{this.props.rating}</p></div>
                    <img src={Arrow} alt="" className='Jokes-RatingArrow Jokes-RatingArrowDown' />
                </div>
                <div className='Jokes-JokeContainer'>
                    <p>{this.props.thejoke}</p>
                </div>

                <img src={this.getRatingEmoji(this.props.rating)} alt="Rating representation emoji" className='Jokes-RatingEmoji' />
            </div>
        )
    }
}
export default Jokes;
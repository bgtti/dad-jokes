import React, { Component } from 'react';
import './03-Jokes.css';
import Arrow from './Images/arrow.png' //Source: Arrow icons created by Kirill Kazachek - Flaticon, href="https://www.flaticon.com/free-icons/angry" title="angry icons"
import Emoji1 from './Images/emoji_1.png' //Source: Angry icons created by Vectors Market - Flaticon, href="https://www.flaticon.com/free-icons/sad" title="sad icons"
import Emoji2 from './Images/emoji_2.png' //Source: Sad icons created by Vectors Market - Flaticon, href="https://www.flaticon.com/free-icons/emoji" title="emoji icons"
import Emoji3 from './Images/emoji_3.png' //Source: Emoji icons created by Vectors Market - Flaticon, href="https://www.flaticon.com/free-icons/emoji" title="emoji icons"
import Emoji4 from './Images/emoji_4.png' //Source: Emoji icons created by Vectors Market - Flaticon, href="https://www.flaticon.com/free-icons/emoji" title="emoji icons"
import Emoji5 from './Images/emoji_5.png' //Source: Emoji icons created by Vectors Market - Flaticon, href="https://www.flaticon.com/free-icons/emoji" title="emoji icons"
import EmojiMain from './Images/emoji_main.png' //Source: Emoji icon created by Freepik - Flaticon, href="https://www.flaticon.com/free-icons/emoji" title="emoji icons"

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
                    <img src={Arrow} alt="Increase rating icon" className='Jokes-RatingArrow Jokes-RatingArrowUp' data-id={this.props.id} onClick={((e) => { this.props.changeRating(e, "up") })} />
                    <div className='Jokes-RatingNumberContainer'><p>{this.props.rating}</p></div>
                    <img src={Arrow} alt="Decrease rating icon" className='Jokes-RatingArrow Jokes-RatingArrowDown' data-id={this.props.id} onClick={((e) => { this.props.changeRating(e, "down") })} />
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
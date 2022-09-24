import React, { Component } from 'react';
// import './02-Jokes.css';
import Emoji1 from './Images/emoji_1'
import Emoji2 from './Images/emoji_2.png'
import Emoji3 from './Images/emoji_3.png'
import Emoji4 from './Images/emoji_4.png'
import Emoji5 from './Images/emoji_5.png'
import EmojiMain from './Images/emoji_main.png'

class JokesEmojis extends Component {
    constructor(props) {
        super(props);
        this.displayEmoji = this.displayEmoji.bind(this);
    }
    displayEmoji(rating) {
        let theEmoji;
        switch (rating) {
            case 1:
                theEmoji = Emoji1;
                break;
            case 2:
                theEmoji = Emoji2;
                break;
            case 3:
                theEmoji = Emoji3;
                break;
            case 4:
                theEmoji = Emoji4;
                break;
            case 5:
                theEmoji = Emoji5;
                break;
            default:
                theEmoji = EmojiMain;
        }
        return {
            theEmoji
        }
    }
    render() {
        return (
            <img src="" alt="" />
        )
    }
}
export default JokesEmojis;
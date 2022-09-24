import React, { Component } from 'react';
import './01-Nav.css';
import EmojiMain from './Images/emoji_main.png'

class Nav extends Component {

    render() {
        return (
            <nav className='Nav'>
                <img src={EmojiMain} alt="Laughing Emoji" className='Nav-EmojiMain' />
                <div>
                    <h1>Dad Jokes</h1>
                    <button>Generate Joke</button>
                </div>

            </nav>
        )
    }
}
export default Nav;
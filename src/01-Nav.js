import React, { Component } from 'react';
import './01-Nav.css';
import EmojiMain from './Images/emoji_main.png'

class Nav extends Component {
    constructor(props) {
        super(props);
        this.getNewJokes = this.getNewJokes.bind(this);
    };
    getNewJokes() {
        this.props.getNewJokes()
    }
    render() {
        return (
            <nav className='Nav'>
                {/* Emoji Source: Emoji icon created by Freepik - Flaticon Available at https://www.flaticon.com/free-icons/emoji */}
                <img src={EmojiMain} alt="Laughing Emoji" className='Nav-EmojiMain' />
                <div className='Nav-LeftContainer'>
                    <div className='Nav-H1Container'>
                        <h1 className='Nav-H1'>Dad Jokes</h1>
                    </div>
                    <div className='Nav-BtnContainer'>
                        <button className='Nav-Btn' onClick={this.getNewJokes}>Generate Jokes</button>
                    </div>
                </div>

            </nav>
        )
    }
}
export default Nav;
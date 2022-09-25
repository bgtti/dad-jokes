import React, { Component } from 'react';
import './05-Loader.css';

class Loader extends Component {

    render() {
        return (
            <div className='Loader'>
                <div className='Loader-Img'>
                </div>
                <p>Loading jokes...</p>
            </div>
        )
    }
}
export default Loader;
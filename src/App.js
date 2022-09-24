import React, { Component } from 'react';
import './App.css';
import Nav from './01-Nav';
import JokesContainer from './02-JokesContainer.js';
import Footer from './04-Footer';
import axios from 'axios';
// import { render } from '@testing-library/react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Jokes
      jokes: [
        { key: "0", rating: 3, joke: "" },
        { key: "1", rating: 3, joke: "" },
        { key: "2", rating: 3, joke: "" },
        { key: "3", rating: 3, joke: "" },
        { key: "4", rating: 3, joke: "" },
        { key: "5", rating: 3, joke: "" },
        { key: "6", rating: 3, joke: "" },
        { key: "7", rating: 3, joke: "" },
        { key: "8", rating: 3, joke: "" },
        { key: "9", rating: 3, joke: "" }
      ],
    };
    this.getDadJokes = this.getDadJokes.bind(this);
  }
  //dhd
  async getDadJokes() {
    let dadJokeURL = "https://icanhazdadjoke.com/"
    let jokeList = [];
    for (let i = 0; i < 10; i++) {
      axios.get(dadJokeURL, { headers: { Accept: "application/json" } })
        .then(response => {
          jokeList.push({ key: i.toString(), rating: 3, joke: response.data.joke })
        });
    }
    this.setState({
      jokes: jokeList
    })
  }
  componentDidMount() {
    this.getDadJokes()
  }
  render() {
    return (
      <div className="App">
        <Nav></Nav>
        <JokesContainer {...this.state}></JokesContainer>
        <Footer></Footer>
      </div>
    )
  }
}

export default App;

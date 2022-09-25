import React, { Component } from 'react';
import './App.css';
import Nav from './01-Nav.js';
import JokesContainer from './02-JokesContainer.js';
import Footer from './04-Footer.js';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Jokes
      jokes: [
        { id: "0", rating: 3, joke: "" },
        { id: "1", rating: 3, joke: "" },
        { id: "2", rating: 3, joke: "" },
        { id: "3", rating: 3, joke: "" },
        { id: "4", rating: 3, joke: "" },
        { id: "5", rating: 3, joke: "" },
        { id: "6", rating: 3, joke: "" },
        { id: "7", rating: 3, joke: "" },
        { id: "8", rating: 3, joke: "" },
        { id: "9", rating: 3, joke: "" }
      ],
      loader: true,
    };
    this.getDadJokes = this.getDadJokes.bind(this);
    this.handleRating = this.handleRating.bind(this);
  }
  async getDadJokes() {
    this.setState({
      loader: true
    })
    let dadJokeURL = "https://icanhazdadjoke.com/"
    try {
      let jokeList = [];
      for (let i = 0; i < 10; i++) {
        let response = await axios.get(dadJokeURL, { headers: { Accept: "application/json" } });
        jokeList.push({ id: i.toString(), rating: 3, joke: response.data.joke });
      }
      this.setState({
        jokes: jokeList
      })
    } catch {
      alert("Error fetching Dad Jokes");
    }
    this.setState({
      loader: false
    })
  }
  handleRating(e, upOrDown) {
    let curStateJokes = [...this.state.jokes];
    let newScore = function (oldRating) {
      let newRating;
      // max rating = 5, min rating = 1:
      if (upOrDown === "up") {
        oldRating === 5 ? newRating = 5 : newRating = oldRating + 1;
      } else if (upOrDown === "down") {
        oldRating === 1 ? newRating = 1 : newRating = oldRating - 1;
      }
      return newRating
    }
    curStateJokes.forEach(joke => {
      if (joke.id === e.target.dataset.id.toString()) {
        joke.rating = newScore(joke.rating);
      }
    })
    this.setState({
      jokes: curStateJokes,
    })
  }
  componentDidMount() {
    this.getDadJokes()
  }

  render() {
    return (
      <div className="App">
        <Nav getNewJokes={this.getDadJokes}></Nav>
        <JokesContainer {...this.state} handleRating={this.handleRating}></JokesContainer>
        <Footer></Footer>
      </div>
    )
  }
}

export default App;

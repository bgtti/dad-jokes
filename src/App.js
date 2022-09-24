import './App.css';
import Nav from './01-Nav';
import JokesContainer from './02-JokesContainer.js';
import Footer from './04-Footer';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <JokesContainer></JokesContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;

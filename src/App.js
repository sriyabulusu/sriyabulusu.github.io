import './App.css';
import Game from './components/Game/Game';

function App() {
  const text = [
    "I am a sophomore at the University of Washington.",
    "I am studying computer science.",
    "I like front end development."
  ]
  return (
    <div className='App'>
      <div className='header'>
        <p className='text'>Hello, I'm Sriya</p>
        <Game defaultSnippet={text}/>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import PlayerScore from './components/PlayerScore';
import Ball from './components/Ball';
import 'bulma'

function App() {
  return (
    <div className="App">
      <div className="columns is-desktop">
        <div className="column has-text-centered">
          <PlayerScore playerName="Player 1" score="23" />
        </div>
        <div className="column has-text-centered">
          <PlayerScore playerName="Player 2" score="0" />
        </div>
      </div>
      <div className="columns is-desktop">
        <Ball colour="red" />
        <Ball colour="yellow" />
        <Ball colour="green" />
        <Ball colour="brown" />
        <Ball colour="blue" />
        <Ball colour="pink" />
        <Ball colour="black" />
      </div>
      
    </div>
  );
}

export default App;

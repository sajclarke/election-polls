import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ScoreBoard from './components/scoreboard';
import Constituencies from './components/constituencies';

class App extends Component {
  state = {
    parties: [
      { key: 'blp', score: 0 },
      { key: 'dlp', score: 0 },
      { key: 'upp', score: 0 },
      { key: 'sb', score: 0 },
      { key: 'ind', score: 0 },
      { key: 'bim', score: 0 },
      { key: 'bfp', score: 0 },
      { key: 'pdc', score: 0 },
      { key: 'pcp', score: 0 },
      { key: 'kgb', score: 0 },
    ],
  };

  updateTotal = parties => {
    this.setState({ parties });
  };

  render() {
    return (
      <div className="App">
        <header className="header">
          <span>Barbados Polls</span>
        </header>

        <ScoreBoard parties={this.state.parties} />
        <Constituencies updateTotal={this.updateTotal} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import TopStories from './TopStories';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome my Hacker News Client</h1>
        </header>
        <TopStories results="50"/>
      </div>
    );
  }
}

export default App;

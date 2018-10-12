import React, { Component } from 'react';
import './App.css';
import { ReactSmartForm } from '../smartform'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <ReactSmartForm />
        </header>
      </div>
    );
  }
}

export default App;

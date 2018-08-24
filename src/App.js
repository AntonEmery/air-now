import React, { Component } from 'react';
import './App.css';
import ZipForm from './components/Zip_Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Get Some Fresh Air</h1>
        </header>
        <ZipForm />
      </div>
    );
  }
}

export default App;

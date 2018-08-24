import React, { Component } from 'react';
import './App.css';
import ZipForm from './components/ZipForm';
import Wrapper from './components/Wrapper';

class App extends Component {

  submitZip = (zip) => {
    console.log(zip);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Get Some Fresh Air</h1>
        </header>
        <ZipForm submitZip={this.submitZip}/>
        <Wrapper />
      </div>
    );
  }
}

export default App;

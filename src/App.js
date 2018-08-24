import React, { Component } from 'react';
import './App.css';
import ZipForm from './components/ZipForm';
import AirData from './components/AirData';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      O3: '',
      'PM2.5': '',
      loading: true
    }

  }

  submitZip = async (zip) => {
    await fetch(`http://www.airnowapi.org/aq/forecast/zipCode/?format=application/json&zipCode=${zip}&API_KEY=D2BEB195-8B67-4BFE-9C6B-68D847F86F2E`)
    .then(data => {
      return data.json();
    }).then(result => {
      this.setState({
        O3: result[0].Category.Name,
        'PM2.5': result[1].Category.Name,
        loading: false
      })
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Get Some Fresh Air</h1>
        </header>
        <ZipForm submitZip={this.submitZip}/>
        {!this.state.loading && <AirData O3={this.state.O3} PM={this.state['PM2.5']}/>}
      </div>
    );
  }
}

export default App;

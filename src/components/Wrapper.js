import React, { Component } from 'react';

class Wrapper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      O3: '',
      'PM2.5': '',
      loading: true
    }
  }


  async componentDidMount() {
    await fetch('http://www.airnowapi.org/aq/forecast/zipCode/?format=application/json&zipCode=97212&API_KEY=D2BEB195-8B67-4BFE-9C6B-68D847F86F2E')
    .then(data => {
      return data.json();
    }).then(result => {
      this.setState({
        O3: result[0].Category.Name,
        'PM2.5': result[1].Category.Name,
        loading: false
      })
    })
    console.log(this.state);
  }

  render() {
    return (
      (this.state.loading)
      ? <p>Loading</p>
      : <p>03: {this.state.O3} PM2.5: {this.state['PM2.5']}</p>
    );
  }
}

export default Wrapper;
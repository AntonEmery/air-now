import React, { Component } from 'react';

class ZipCodeForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      zip: ''
    };
  }

  handleZip = (event) => {
    this.setState({zip: event.target.value})
  }

  render() {
    return (
      <div>
        <h3>Enter Your Zip Code</h3>
        <input type="number" name="zip" value={this.state.zip} onChange={this.handleZip}/>
        <button type="button">Submit</button>
      </div>
    );
  }
}

export default ZipCodeForm ;
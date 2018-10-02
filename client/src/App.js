import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Flat from './results/Flat.js';
import { throws } from 'assert';

class App extends Component {

  componentWillMount(){
    fetch("/api/trademe/flatmate-placeholder")
      .then(res => {
        console.log("Res: ", res)
        res.json().then(data => {
          console.log("data: ", data);

          this.props.flats = data.flats;

          console.log(this.props.flats)
        });
      })
  }

  renderFlats(){
    const listFlat = this.props.flats.map((flat) => {
      <Flat ID={flat.ListingID} flat={flat}>
        {flat}
      </Flat>
    })
  }

  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Flat kay={this.props.flats[0].ListingID}>
          {this.props.flats[0]}
        </Flat>
        

      </div>
    );
  }
}

export default App;

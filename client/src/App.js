import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Flat from './results/Flat.js';
import { throws } from 'assert';

class App extends Component {

  componentWillMount(){
    this.setState({
      flats: []
    });
  }

  componentDidMount(){
    console.log("Did mount");
    fetch("/api/trademe/flatmate-placeholder")
      .then(res => {
        console.log(res);
        res.json().then(data => {
          console.log(data);
          this.props.flats = data.flats;
          this.setState({
            flats: data.flats
          })
        });
      });
  }

  renderFlats(){
    if(!this.props.flats){
      return (<div>
        Loading Flats.
      </div>)
    }
    else{
      return (
        <div>
          Flat List:
          {this.state.flats.map(flat => {
            return (<Flat 
              key={flat.ListingID}
              pricePerRoom={flat.pricePerRoom}
              Title={flat.Title}>
            </Flat>);
          })}
        </div>
      )
    }
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

        {this.renderFlats()}

        

      </div>
    );
  }
}

export default App;

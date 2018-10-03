import React, { Component } from 'react';
import { PageHeader, Grid, Row, Col } from 'react-bootstrap';
import './App.css';
import ResultContainer from './results/ResultsContainer';
import SearchContainer from './results/SearchContainer';

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
        res.json().then(data => {
          console.log(data);
          this.props.flats = data.flats;
          this.setState({
             flats: data.flats
          })
          console.log("State", this.state);
        });
      });
  }

  search(filter){
    // console.log("triggered search");

    // if(this.props.flats){
    //   this.setState({
    //     flats: filter(this.props.flats)
    //   });
    // }
    
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">_Mate</h1>
        </div>

        <Grid className="show-grid">
          <Row>
            
            <Col md={3}>
              <SearchContainer search={this.search}>
              </SearchContainer>
            </Col>

            <Col md={9}>
              <ResultContainer key={this.props.flats} flats={this.props.flats} >
              </ResultContainer>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;

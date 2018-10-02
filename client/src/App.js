import React, { Component } from 'react';
import { PageHeader, Well, Grid, Row, Col } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import ResultContainer from './results/ResultsContainer';

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

  render() {
    return (
      <div className="App">
        <PageHeader className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </PageHeader>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Grid>
          <Row>
            <Col>
              <div class="App-Search" sm={12} md={3}>
                This is where the search will go
              </div>
            </Col>
            <Col>
              <Well>
                <ResultContainer key={this.props.flats} flats={this.props.flats} sm={12} md={9}>

                </ResultContainer>
              </Well>
              
            </Col>
          </Row>
        </Grid>
        

        

        

      </div>
    );
  }
}

export default App;

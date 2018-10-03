import React, { Component } from 'react';
import { Container, PageHeader, Well, Grid, Row, Col } from 'react-bootstrap';
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
        <Grid className="show-grid">
          <Row>
            <Col md={3}>
              <div class="App-Search">
                This is where the search will go
              </div>
            </Col>
            <Col md={9}>
              <Well>
                <ResultContainer key={this.props.flats} flats={this.props.flats} >

                </ResultContainer>
              </Well>
              
            </Col>
          </Row>
        </Grid>

        <Container>
          <Row>
            <Col>1 of 3</Col>
            <Col xs={6}>2 of 3 (wider)</Col>
            <Col>3 of 3</Col>
          </Row>
          <Row>
            <Col>1 of 3</Col>
            <Col xs={5}>2 of 3 (wider)</Col>
            <Col>3 of 3</Col>
          </Row>
        </Container>;
        

        

        

      </div>
    );
  }
}

export default App;

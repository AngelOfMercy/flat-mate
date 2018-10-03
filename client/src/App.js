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
    const styles = {
      container: {
        backgroundColor: store.grey
      },
      left: {
        height: store.height,
        padding: 0,
        margin: 0,
        overflow: 'hidden'
      },
      right: {
        overflowY: 'auto',
        padding: 0,
        height: store.height,
        paddingBottom: '50px'
      },
      row: {
        marginBottom: 0
      }
    }
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
          <Row style={styles.row}>
            <Col md={3} style={styles.left}>
              <div class="App-Search">
                This is where the search will go
              </div>
            </Col>
            <Col md={9} style={styles.right}>
              <Well>
                <ResultContainer key={this.props.flats} flats={this.props.flats} >

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

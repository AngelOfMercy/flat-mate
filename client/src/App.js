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
      },
      left: {
        padding: 0,
        margin: 0,
        overflow: 'hidden'
      },
      right: {
        overflowY: 'auto',
        padding: 0,
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

        <Grid>
  <Row className="show-grid">
    <Col xs={12} md={8}>
      <code>{'<Col xs={12} md={8} />'};</code>
    </Col>
    <Col xs={6} md={4}>
      <code>{'<Col xs={6} md={4} />'}</code>
    </Col>
  </Row>

  <Row className="show-grid">
    <Col xs={6} md={4}>
      <code>{'<Col xs={6} md={4} />'}</code>
    </Col>
    <Col xs={6} md={4}>
      <code>{'<Col xs={6} md={4} />'}</code>
    </Col>
    <Col xsHidden md={4}>
      <code>{'<Col xsHidden md={4} />'}</code>
    </Col>
  </Row>

  <Row className="show-grid">
    <Col xs={6} xsOffset={6}>
      <code>{'<Col xs={6} xsOffset={6} />'}</code>
    </Col>
  </Row>

  <Row className="show-grid">
    <Col md={6} mdPush={6}>
      <code>{'<Col md={6} mdPush={6} />'}</code>
    </Col>
    <Col md={6} mdPull={6}>
      <code>{'<Col md={6} mdPull={6} />'}</code>
    </Col>
  </Row>
</Grid>;
      </div>
    );
  }
}

export default App;

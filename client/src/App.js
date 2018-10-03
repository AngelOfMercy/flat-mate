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

    this.setState({
      flats: filter(this.props.flats)
    })
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
          <h1 className="App-title">_Mate</h1>
        </PageHeader>

        <Grid className="show-grid">
          <Row style={styles.row}>
            <Col md={3} style={styles.left}>
              <SearchContainer search={this.search()} >
              </SearchContainer>
            </Col>
            <Col md={9} style={styles.right}>
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

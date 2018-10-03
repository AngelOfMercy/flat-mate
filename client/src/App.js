import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './App.css';
import ResultContainer from './results/ResultsContainer';
import SearchContainer from './results/SearchContainer';

class App extends Component {

  constructor(props, context){
		super(props, context);

		this.search = this.search.bind(this);

		this.state = {
			flats: []
		}
	}

  componentWillMount(){
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

  search(data){
    if(data){
      this.setState({
        flats: this.filteredFlats(data.target.value)
      })
    }
  }

  filteredFlats(data){
    console.log(data);
    var output = [];

		if(!data || data.length === 0 || data === '')
      return this.props.flats;

		this.props.flats.forEach(flat => {
			const regex = new RegExp(data, "i")
			if(flat.Title.match(regex)){
				output.push(flat);
			}
		});
		return output;
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">

            _Mate

        </div>

        <Grid className="show-grid">
          <Row>
            
            <Col md={3}>
              <SearchContainer search={this.search} update={this.search}>
              </SearchContainer>
            </Col>

            <Col md={9}>
              <ResultContainer key={this.state.flats} flats={this.state.flats} >
              </ResultContainer>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './App.css';
import ResultContainer from './results/ResultsContainer';
import SearchContainer from './search/SearchContainer';
//import { throws } from 'assert';

class App extends Component {

  constructor(props, context){
		super(props, context);

    this.search = this.search.bind(this);
    //this.filterSearch = this.filterSearch.bind(this);

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
        flats: data
      })
    }
  }

  // filterSearch(filter){
  //   if(filter){
  //     this.setState({
  //       flats: filter(this.props.flats)
  //     })
  //   }
  //}

  // filteredFlats(data){
  //   console.log(data);
  //   var output = [];
  //   var flats = this.props.flats;
  //   var element_changed = data.target.name;
  //   var value = data.target.value;

	// 	if(!value || value.length === 0 || value === '')
  //     return this.props.flats;

  //   if(element_changed === 'keyword'){
  //     this.props.flats.forEach(flat => {
  //       const regex = new RegExp(value, "i")
  //       if(flat.Title.match(regex)){
  //         output.push(flat);
  //       }
  //     });
  //   }
  
	// 	return output;
  // }

  render() {
    return (
      <div className="App">
        <div className="App-header">

            _Mate

        </div>

        <Grid className="show-grid">
          <Row>
            
            <Col md={3}>
              <SearchContainer search={this.search} update={this.search} flats={this.props.flats} filteredFlats={this.search}>
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

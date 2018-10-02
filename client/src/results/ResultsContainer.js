import React, { Component } from 'react';
import Flat from './Flat.js';

class ResultContainer extends Component {

	componentWillMount(){
		console.log("Flat?", this.props);
		this.setState({
			flats:this.props.flats || []
		})
	}

	renderFlats(){
		if(!this.props.flats && !this.state.flats){
		  return (<div>
			Loading Flats.
		  </div>)
		}
		else{
		  console.log("Props",this.props.flats);
		  console.log("State", this.state);
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

	render(){
		return(<div class="ResultContainer">
			Search Results:
			{this.renderFlats()}
		</div>
		)
	}
}

export default ResultContainer;
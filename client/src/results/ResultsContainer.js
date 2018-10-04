import React, { Component } from 'react';
import Flat from './Flat.js';
import './ResultContainer.css';
import { Well, Row } from 'react-bootstrap';

class ResultContainer extends Component {

	constructor(props, context){
		super(props, context);

		//this.renderFlats = this.renderFlats.bind(this);

		this.state = {
			flats: props.flats
		}
	}

	renderFlats(){
		if(!this.props.flats){
		  return (<div>
			No Flats Found
		  </div>)
		}
		else{
		  return (
			<div>
			  {this.props.flats.map(flat => {

				if(!flat.pricePerRoom){
					flat.pricePerRoom = flat.StartPrice/flat.BedRooms;
				}

				return (<Flat 
				  key={flat.ListingID}
					pricePerRoom={flat.pricePerRoom}
					BedRooms={flat.BedRooms}
				  Title={flat.Title}
				  Images={flat.PhotoUrls}
				  />);
			  })}
			</div>
		  )
		}
	}

	componentWillReceiveProps(nextProps){
		console.log("New Props", nextProps);
	}

	componentDidUpdate(props){
		console.log("Did update", props);
	}

	render(){
		return(
		<Well>
			<Row>
				{this.renderFlats()}
			</Row>
			
		</Well>
		)
	}
}

export default ResultContainer;
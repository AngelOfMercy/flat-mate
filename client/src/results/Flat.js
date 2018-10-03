import React, { Component } from 'react';
import { Thumbnail, Row, Col, Button } from 'react-bootstrap';
import './Flat.css';

class Flat extends Component {

	componentWillMount(){
		console.log("Flat?", this.props);
	}

	pickImage(){
		if(this.props.Images[0])
			return this.props.Images[0];
		else{
			return "";
		}
	}

	render(){
		return(
			<Col xs={6} md={4}>
				<Thumbnail href='#' alt="None" src={this.pickImage()}>
					<h3>{this.props.Title}</h3>
					<p>Description</p>
					<p>
						<Button bsStyle="primary">
							View
						</Button>
					</p>
				</Thumbnail>
			</Col>
			
		)
	}
}

export default Flat;
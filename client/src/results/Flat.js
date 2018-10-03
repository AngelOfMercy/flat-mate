import React, { Component } from 'react';
import { Well, Row, Col } from 'react-bootstrap';
import './Flat.css';

class Flat extends Component {

	componentWillMount(){
		console.log("Flat?", this.props);
	}

	render(){
		return(
			<div className="FlatContainer">
				<Row>
					<Col xs={3}>
						Image Goes Here
					</Col>
					<Col>
							{this.props.Title}
					</Col>
				</Row>
			</div>
		)
	}
}

export default Flat;
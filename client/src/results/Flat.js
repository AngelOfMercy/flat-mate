import React, { Component } from 'react';
import { Well, Grid, Row, Col } from 'react-bootstrap';

class Flat extends Component {

	componentWillMount(){
		console.log("Flat?", this.props);
	}

	render(){
		return(
			<div style="width:100%;margin:10px;background-color:white;padding:5px;">
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
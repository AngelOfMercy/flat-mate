import React, { Component } from 'react';
import { Well, Grid, Row, Col } from 'react-bootstrap';

class Flat extends Component {

	componentWillMount(){
		console.log("Flat?", this.props);
	}

	render(){
		return(
			<Well bsStyle="small">
				
					<Row>
						<Col xs={3}>
							Image Goes Here
						</Col>
						<Col>
								{this.props.Title}
						</Col>
					</Row>
			</Well>
		)
	}
}

export default Flat;
import React, { Component } from 'react';
import { Well, Grid, Row, Col } from 'react-bootstrap';

class Flat extends Component {

	componentWillMount(){
		console.log("Flat?", this.props);
	}

	render(){
		return(
			<Well>
				<Grid className="show-grid">
					<Row>
						<Col xs={3}>
							Image Goes Here
						</Col>
						<Col xs={9}>
								{this.props.Title}
						</Col>
					</Row>

				</Grid>
			</Well>
		)
	}
}

export default Flat;
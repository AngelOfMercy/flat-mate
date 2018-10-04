import React, { Component } from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import './Flat.css';

class Flat extends Component {

	pickImage(){
		if(this.props.Images[0])
			return this.props.Images[0];
		else {
			return "/blank.png";
		}
	}

	render(){
		return(
			<div className="FlatContainer">
				<Row>
						<Image className="FlatImage" src={this.pickImage()} />
					<Col>
						<h3>{this.props.Title}</h3>
							<p>Price per Room: {this.props.pricePerRoom}<br/>Bedrooms: {this.props.BedRooms}</p>
					</Col>
				</Row>
			</div>
			// <Row>
			// 	<Col xs={12}>
			// 		<div >
			// 			<div >
							
			// 			</div>
			// 			<div className="FlatInfo">
							
			// 			</div>
			// 		</div>
			// 		{/* <Thumbnail alt="None" src={this.pickImage()}>
			// 			<h3>{this.props.Title}</h3>
			// 			<p>Price per Room: {this.props.pricePerRoom}<br/>Bedrooms: {this.props.BedRooms}</p>

			// 			<p>
			// 				<Button bsStyle="primary">
			// 					View
			// 				</Button>
							
								
							
			// 			</p>
			// 		</Thumbnail> */}
			// 	</Col>
			// </Row>
		)
	}
}

export default Flat;
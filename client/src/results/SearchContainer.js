import React, { Component } from 'react';
//import Form from 'react-bootstrap/lib/Form';
import { Button, Form } from 'react-bootstrap';

class Flat extends Component {

	componentWillMount(){
		console.log("Mounting Search Container", this.props);
	}

	// filterResults(data){
	// 	const temp = {
	// 		...data
	// 	};

	// 	return temp;
	// }

	render(){
		return(<div>
			<Form>
				<Form.Control type="text" placeholder="Title" />
				
			<Button bsStyle="primary" /*onClick={this.props.search(this.filterResults)} */>
						Search
					</Button>
			</Form>
			
			
		</div>
		)
	}
}

export default Flat;
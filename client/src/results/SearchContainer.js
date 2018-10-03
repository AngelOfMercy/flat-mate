import React, { Component } from 'react';
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
			Seach Form:
			<Form>
				<Form.Group>
					<Form.Control type="text" placeholder="Title" value={this.props.title} onChange={console.log("Form", this.props)}/>
				</Form.Group>
			</Form>
			<Button bsStyle="primary" /*onClick={this.props.search(this.filterResults)} */>
				Search
			</Button>
		</div>
		)
	}
}

export default Flat;
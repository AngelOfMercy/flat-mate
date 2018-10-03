import React, { Component } from 'react';
//import Form from 'react-bootstrap/lib/Form';
import { Button, FormControl } from 'react-bootstrap';

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
			<form>
				<FormControl type="text" placeholder="Title" value={this.state.search.title} />
				
			<Button bsStyle="primary" /*onClick={this.props.search(this.filterResults)} */>
						Search
					</Button>
			</form>
			
			
		</div>
		)
	}
}

export default Flat;
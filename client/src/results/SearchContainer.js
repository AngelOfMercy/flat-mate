import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Flat extends Component {

	componentWillMount(){
		console.log("Mounting Search Container", this.props);
	}

	filterResults(data){
		const temp = {
			...data
		};
		
		return temp;
	}

	render(){
		return(<div>
			Seach Form:
			<Button bsStyle="primary" onClick={this.props.search(this.filterResults)}>
				Search
			</Button>
		</div>
		)
	}
}

export default Flat;
import React, { Component } from 'react';

class Flat extends Component {

	componentWillMount(){
		console.log("Mounting Search Container", this.props);
	}

	filterResults(data){
		return data;
	}

	render(){
		return(<div>
			Seach Form:
			<Button bsStyle="primary" onClick={this.props.search(filterResults)}>
				Search
			</Button>
		</div>
		)
	}
}

export default Flat;
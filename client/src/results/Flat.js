import React, { Component } from 'react';

class Flat extends Component {

	componentWillMount(){
		console.log("Flat?", this.props);
	}

	render(){
		return(<div>
			Hi
		</div>
		)
	}
}

export default Flat;
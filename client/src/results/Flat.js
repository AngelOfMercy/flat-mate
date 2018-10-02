import React, { Component } from 'react';

class Flat extends Component {

	componentWillMount(){
		console.log("Flat?", this.props);
	}

	render(){
		return(<div>
			Title: {this.props.Title}
		</div>
		)
	}
}

export default Flat;
import React, { Component } from 'react';

class Flat extends Component {

	componentWillMount(){
		console.log("Mounting Search Container", this.props);
	}

	render(){
		return(<div>
			Seach Form:
		</div>
		)
	}
}

export default Flat;
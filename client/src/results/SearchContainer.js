import React, { Component } from 'react';
//import Form from 'react-bootstrap/lib/Form';
import { Button, FormControl, FormGroup } from 'react-bootstrap';
import './SearchContainer.css';

class SearchContainer extends Component {

	constructor(props, context){
		super(props, context);

		this.handleChange = this.handleChange.bind(this);
		//this.filterResults = this.filterResults.bind(this);

		this.state = {
			title: ''
		}
	}

	componentWillMount(){
		console.log("Mounting Search Container", this.props);
	}

	// filterResults(data){

	// 	var output = [];

	// 	if(!data || data.length === 0)
	// 		return output;

	// 	data.forEach(flat => {
	// 		const regex = new RegExp(this.state.title, "i")
	// 		if(flat.Title.match(regex)){
	// 			output.push(flat);
	// 		}
	// 	});
	// 	return output;
	// }

	handleChange(e) {
		this.setState({ title: e.target.value });
		this.props.update(e);
	}

	render(){
		return(
		<div className="SearchContainer">
			<form>
				<p className="SearchTitle">
					Find your flat!
				</p>
				
				<FormGroup>
					<FormControl type="text" 
						placeholder="Key Word Search" 
						value={this.state.title} 
						onChange={this.handleChange}
					/>
				</FormGroup>
				<Button bsStyle="primary" onClick={this.props.search(this.filterResults)} >
						Search
				</Button>
				
			</form>
			
			
		</div>
		)
	}
}

export default SearchContainer;
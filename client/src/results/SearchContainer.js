import React, { Component } from 'react';
//import Form from 'react-bootstrap/lib/Form';
import { Button, FormControl } from 'react-bootstrap';

class Flat extends Component {

	constructor(props, context){
		super(props, context);

		this.handleChange = this.handleChange.bind(this);

		this.state = {
			value: ''
		}
	}

	componentWillMount(){
		console.log("Mounting Search Container", this.props);
	}

	filterResults(data){

		var output = [];

		if(!data)
			return output;

		data.forEach(flat => {
			console.log(flat.Title)
			if(flat.Title.match(new RegExp(this.props.Title, "i"))){
				console.log(true);
				output.push(flat);
			}
			else{
				console.log(false);
			}
		});
		console.log("Output:", output);
		return output;
	}

	handleChange(e) {
		this.setState({ title: e.target.value });
	}

	render(){
		return(<div>
			<form>
				<FormControl type="text" 
					placeholder="Title" 
					value={this.state.title} 
					onChange={this.handleChange}
				/>
				
				<Button bsStyle="primary" onClick={this.props.search(this.filterResults)} >
					Search
				</Button>
			</form>
			
			
		</div>
		)
	}
}

export default Flat;
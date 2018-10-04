import React, { Component } from 'react';
//import Form from 'react-bootstrap/lib/Form';
import { InputGroup, FormControl, FormGroup } from 'react-bootstrap';

class SearchPrice extends Component {

	constructor(props, context){
		super(props, context);
		
		this.handleChange = this.handleChange.bind(this);

		this.state = {
			minimum: '',
			maximum: '',
			validation:{
				minimum: null,
				maximum: null
			}
		}
	}


	hanldeMinimumValidation(){
		if(isNaN(this.state.minimum)){
			return "warning";
		}

		return null;
	}

	handleMaximumValidation(){
		if(isNaN(this.state.maximum)){
			return "warning";
		}
		if(this.state.maximum < this.state.minimum){
			return "error";
		}

		return null;
	}



	render(){
		return (<FormGroup>
			<InputGroup validationState={this.state.validation.minimum}>
				<InputGroup.Addon>$</InputGroup.Addon>
				<FormControl type="text"
					placeholder="Minimum Price"
					name="minimum"
					value={this.state.minimum}
					
					onChange={this.handleChange}/>
			</InputGroup>
			<InputGroup validationState={this.state.validation.maximum}>
				<InputGroup.Addon>$</InputGroup.Addon>
				<FormControl type="text"
					placeholder="Maximum Price"
					name="maximum"
					value={this.state.maximum}
					
					onChange={this.handleChange}/>
			</InputGroup>
		</FormGroup>);
	}

	
}
export default SearchPrice;
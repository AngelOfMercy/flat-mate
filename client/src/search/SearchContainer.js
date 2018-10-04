import React, { Component } from 'react';
//import Form from 'react-bootstrap/lib/Form';
import { FormControl, FormGroup, InputGroup } from 'react-bootstrap';
import './SearchContainer.css';
//import SearchPrice from './fields/SearchPrice';

class SearchContainer extends Component {

	constructor(props, context){
		super(props, context);

		this.handleChange = this.handleChange.bind(this);
		this.filterFlats = this.filterFlats.bind(this);
		//this.filterResults = this.filterResults.bind(this);

		this.state = {
			title: '',
			minimum: '',
			maximum: '',
			validation: {}
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

	componentDidUpdate(){
	}

	/**
	 * Change Handlers
	 */

	handleChange(e){
		if(e.target.name === 'minimum' || e.target.name === 'maximum'){
			const regex = /^[0-9]+(\.[0-9]{0,2}){0,1}$/g;

			var val = e.target.value;
			console.log("Val", val);

			if(regex.test(val) || val === ''){
				this.setState({
					[e.target.name]: e.target.value
				});
				this.props.update(e);
			}
		} else {
			this.setState({ title: e.target.value });
			this.props.update(e);
		}
		this.filterFlats(e);
	}

	/**
	 * Filter Flats
	 */

	filterFlats(e){
		var flats = this.props.flats;
		var output = []
		console.log("Flats:" , flats);
		flats.forEach(flat => {
			console.log(flat);
			if(this.checkKeyWords(flat, e)
				&& this.checkPriceMinimum(flat, e)
				&& this.checkPriceMaximum(flat, e)){
			  output.push(flat);
			}
		  });

		this.props.filteredFlats(output);
	}

	checkKeyWords(flat, e){
		var val = e.target.name === 'keyword' ? e.target.value : this.state.title;
		const regex = new RegExp(val, "i");
		return val === ''  || flat.Title.match(regex);
	}

	checkPriceMinimum(flat, e){
		var val = e.target.name === 'minimum' ? e.target.value : this.state.minimum;
		return val === '' || flat.pricePerRoom > parseFloat(val);
	}

	checkPriceMaximum(flat, e){
		var val = e.target.name === 'maximum' ? e.target.value : this.state.maximum;
		return val === '' || flat.pricePerRoom < parseFloat(val);
	}

	/**
	 * Render
	 */

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
						name="keyword"
					/>
				</FormGroup>

				<FormGroup>
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
				</FormGroup>
			</form>
			
			
		</div>
		)
	}
}

export default SearchContainer;
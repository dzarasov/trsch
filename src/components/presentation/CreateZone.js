import React, {Component} from 'react';

class CreateZone extends Component {
	constructor() {
		super();
		this.state = {
			zone: {
				name: '',
				zipCode: ''
			}
		}
	}

	updateZone(event) {
		let updatedZone = Object.assign({}, this.state.zone);
		updatedZone[event.target.id] = event.target.value;
		this.setState({
			zone: updatedZone
		})
	}

	submitZone() {
		let updatedZone = Object.assign({}, this.state.zone);
		updatedZone['zipCodes'] = updatedZone.zipCode.split(',');
		this.props.onCreate(updatedZone);
	}

	render() {
		return(
			<div>
				{/*<input id="name" onChange={this.updateZone.bind(this)} type="text" className="form-control" placeholder="Name should contain only characters" /><br/>
				<input id="zipCode" onChange={this.updateZone.bind(this)} type="text" className="form-control" placeholder="Zip should contain only numbers" /><br/>
				<button onClick={this.submitZone.bind(this)} className="btn btn-danger">Add Zone</button> */}
			</div>	
		)
	}
}

export default CreateZone;
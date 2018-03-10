import React, { Component } from 'react';
import Zone from '../presentation/Zone'
import { APIManager } from '../../utils';
import { CreateZone } from '../presentation';
import { connect } from 'react-redux';
import actions from '../../actions/actions';
import store from '../../stores/store';
import style from './styles';



class Zones extends Component {
	constructor() {
		super();
		this.state = {
		}
	}

	componentDidMount() {
		APIManager.get('/api/zone', null, (err, response) => {
			if(err) {
				alert('ERROR: ', err.message);
				return;
			}

			const zones = response.results;
			this.props.zonesRecieved(zones);
		})
	}

	addZone(zone) {		
		let updatedZone = Object.assign({}, zone);
		APIManager
			.post('/api/zone', updatedZone, (err, response) => {
				if(err) {
					alert('ERROR: ', err.message);
					return;
				}
				this.props.zoneCreated(response.result);
			})
	}

	selectZone(index) {
		this.props.selectClickedZone(index);
	}


	render() {
		const listOfZones = this.props.list.map((zone, i) => {
			let selected = (i == this.props.selected);
			return (
				<div key={i}>
					<li style={style.liStyle} className="col-xs-2" key={i}>
						<Zone select={this.selectZone.bind(this)} index={i} isSelected={selected} currentZone={zone} />
					</li>
				</div>
			)
		})

		return (
			<div className="container">
				<ul style={style.ulStyle} className="row">
					{listOfZones}
				</ul>
				<CreateZone onCreate={this.addZone.bind(this)}/>
			</div>
		)
	}
}

const stateToProps = (state) => {
	return {
		list: state.zoneStore.list,
		selected: state.zoneStore.selectedZone
	}
}

const dispatchToProps = (dispatch) => {
	return {
		zonesRecieved: (zones) => dispatch(actions.zonesRecieved(zones)),
		zoneCreated: (zone) => dispatch(actions.zoneCreated(zone)),
		selectClickedZone: (index) => dispatch(actions.selectZone(index))
	}
}

export default connect(stateToProps, dispatchToProps)(Zones)




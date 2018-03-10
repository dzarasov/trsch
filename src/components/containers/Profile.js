import React, {Component} from 'react';
import { APIManager } from '../../utils';
import { connect } from 'react-redux';
import actions from '../../actions/actions';

class Profile extends Component {

	constructor() {
		super();
		this.state = {
		//	profile: null
		}
	}

	componentDidMount() {
		APIManager.get('/api/profile', {username: this.props.username}, (err, response) => {
			if(err) {
				console.log('err: ' + err);
				return;
			}

			if(response.results.length == 0) {
				console.log('no data in array');
				return;
			}

			console.log('response: ' + JSON.stringify(response));
			const profile = response.results[0];
			this.props.profileReceived(profile);
		})
	}

	render() {
		const profile = this.props.profiles[0];
		for(var i = 0; i<this.props.profiles.length; i++) {
			console.log('prfile: ' + JSON.stringify(this.props.profiles[i]));
		}

		let header = null;
		if(profile != null) {
			header = (
				<div>
					<h3>Person: {profile.username}</h3>
					<h3>Gender: {profile.gender}</h3>
					<h3>City: {profile.city}</h3>
				</div>
			)
		}		
		return(
			<div>
				{/*This is the Profile Container
				{header}*/}
			</div>
		)
	}
}

const stateToProps = (state) => {
	return {
		profiles: state.profileStore.list
	}
}

const dispatchToProps = (dispatch) => {
	return {
		profileReceived: (profile) => dispatch(actions.profileReceived(profile))
	}
}

export default connect(stateToProps, dispatchToProps)(Profile)
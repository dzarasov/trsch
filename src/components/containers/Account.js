import React, { Component} from 'react';
import { APIManager } from '../../utils';
import { connect } from 'react-redux';
import actions from '../../actions/actions';

class Account extends Component {
	constructor() {
		super();
		this.state = {
			profile: {
				username: '',
				password: '',
				city: '',
				gender: ''
			}
		}
	}

	componentDidMount() {
		APIManager.get('/account/currentuser', null, (err, response) => {
			if(err) {
				console.log('err: ' + err);
				return;
			}
			console.log('backend response: user.id: ', response.user);
			this.props.currentUserReceived(response.user)
		})
	}

	updateProfile(event) {
		event.preventDefault();
		let updateProfile = Object.assign({}, this.state.profile);
		updateProfile[event.target.id] = event.target.value;
		this.setState({
			profile: updateProfile
		})
	}

	login(event) {
		event.preventDefault();
		if(this.state.profile.username.length == 0) {
			alert('input username');
			return
		}
		if(this.state.profile.password.length == 0) {
			alert('input password');
			return
		}

		APIManager.post('/account/login', this.state.profile, (err, response) => {
			if(err) { // account login eto route set up v app.js v main dir a ot tuda on idet v routes/account.js i beret sleduushiy parameter
				alert('err: ' + err);	
				alert(`Login ERROR: ${err.message}`);
				return;
			}
			console.log('login: ', response.user);
			this.props.currentUserReceived(response.user);
		})
	}	

	signup(event) {
		event.preventDefault();
		console.log('this.state.profile test: ', this.state.profile);
		if(this.state.profile.username.length == 0) {
			alert('input username');
			return
		}
		if(this.state.profile.password.length == 0) {
			alert('input password');
			return
		}

		APIManager.post('/account/register', this.state.profile, (err, response) => {
			if(err) {
				console.log('ERROR: ' + err);
				return;
			}
			this.props.currentUserReceived(response.user);
		})
	}

	logout(event) {
		event.preventDefault();
		APIManager.get('/account/logout', null, (err, response) => {
			if(err) {
				console.log('ERROR: ' + err);
				return;
			}
			this.props.currentUserReceived(null);
		})
	}

	render() {		
		let content = null;
		if(this.props.user != null) {
			content = (
				<div>
					<h2>Welcome {this.props.user.username}!</h2>
					<button onClick={this.logout.bind(this)}>Logout</button>
				</div>	

			)
		} else {
			content = (
			<div>
				<h2>Login</h2>
				<input id="username" onChange={this.updateProfile.bind(this)} type="text" placeholder="username" /><br />
				<input id="password" onChange={this.updateProfile.bind(this)} type="password" placeholder="password" /><br />
				<button onClick={this.login.bind(this)}>Log in</button><br />

				<h2>Sign Up</h2>
				<input id="username" onChange={this.updateProfile.bind(this)} type="text" placeholder="username" /><br />
				<input id="password" onChange={this.updateProfile.bind(this)} type="password" placeholder="password" /><br />
				<input id="city" onChange={this.updateProfile.bind(this)} type="text" placeholder="city" /><br />
				<input id="gender" onChange={this.updateProfile.bind(this)} type="text" placeholder="gender" /><br />
				<button onClick={this.signup.bind(this)} >Sign up</button>
			</div>	
			)
		}

		return (
			<div>
				{/*{content}*/}
			</div>
		)
	}
}

const stateToProps = (state) => {
	return {
		user: state.accountStore.user
	}
}

const dispatchToProps = (dispatch) => {
	return {
		currentUserReceived: (user) => dispatch(actions.currentUserReceived(user))
	}
}

export default connect(stateToProps, dispatchToProps)(Account)
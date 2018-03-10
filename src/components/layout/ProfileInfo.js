import React, {Component} from 'react';
import { Profile } from '../containers';

class ProfileInfo extends Component {
	componentDidMount() {
		console.log('did mount: ' + JSON.stringify(this.props));
	}

	render() {
		return (
			<div>
				{/*Profile Info Layout
				<Profile username={this.props.match.params.username}/>*/}			
			</div>
		)
	}
}

export default ProfileInfo;
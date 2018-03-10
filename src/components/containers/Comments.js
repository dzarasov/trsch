import React, { Component } from 'react';
import {Comment, CreateComment} from '../presentation';
import style from './styles';
import { APIManager } from '../../utils';
import { connect } from 'react-redux';
import actions from '../../actions/actions';

class Comments extends Component {
	constructor() {
		super();
		this.state = {
			// comment: {
			// 	username: '',
			// 	body: '',
			// },
			list: [],
			commentsLoaded: false
		}
	}

	componentDidMount() {
		// let zone = this.props.zones[this.props.index];
		// if(zone == null) {
		// 	console.log('No Selected Zone');
		// 	return;
		// }

		// APIManager.get('/api/comment', {zone: zone._id}, (err, response) => {
		// 	if(err) {
		// 		alert('ERROR: ', err.message);
		// 		return;
		// 	}
		// 	// this.setState({
		// 	// 	list: response.results
		// 	// });
		// 	this.props.commentsReceived(response.results);
		// })
	}

	componentDidUpdate() {
		let zone = this.props.zones[this.props.index];
		if(zone == null) {
			return;
		}

		let commentsArray = this.props.commentsMap[zone._id];
		if(commentsArray != null) {
			return;
		}

		APIManager.get('/api/comment', {zone: zone._id}, (err, response) => {
			if(err) {
				alert('ERROR: ', err.message);
				return;
			}
			this.props.commentsReceived(response.results, zone);
		})
	}

	submitComment(comment) {
		if(this.props.user == null) {
			alert('Please Sign up or Login to comment');
			return;
		}

		let updatedComment = Object.assign({}, comment);
		let zone = this.props.zones[this.props.index];
		updatedComment['zone'] = zone._id;

		updatedComment['username'] = this.props.user.username;

		APIManager.post('/api/comment', updatedComment, (err, response) => {
			if(err) {
				alert('ERROR: ', err.message);
				return;
			}
			this.props.commentCreated(response.result);
			// this.props.commentsReceived([response.result], zone);

		})

	}

	render() {
		let commentList;
		const selectedZone = this.props.zones[this.props.index];
		const zoneName = (selectedZone == null) ? '' : selectedZone.name;
		let commentsArray = selectedZone ? this.props.commentsMap[selectedZone._id] : [];

		if(commentsArray != null ) {
			commentList = commentsArray.map((comment, i) => {
				return (
					<div key={i}>
						<li className="list-group-item list-group-item-action" key={i} ><Comment currentComment={comment} /></li>
						<br/>
					</div>	
				)
			})			
		}



		return (
			<div>
				<h1 style={style.zoneName} className="text-center">{zoneName} Trucking Schools</h1>
				<div>
					<ul className="list-group">
						{ commentList }
					</ul>
				</div>
			</div>
		)	
	}
}

const stateToProps = (state) => {
	return {
		// comments: state.commentStore.list,
		commentsMap: state.commentStore.map,
		commentsLoaded: state.commentStore.commentsLoaded,
		index: state.zoneStore.selectedZone,
		zones: state.zoneStore.list,
		user: state.accountStore.user
	}
}

const dispatchToProps = (dispatch) => {
	return {
		commentsReceived: (comments, zone) => dispatch(actions.commentsReceived(comments, zone)),
		commentCreated: (comment) => dispatch(actions.commentCreated(comment))
	}
}

export default connect(stateToProps, dispatchToProps)(Comments);

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './styles';

class Comment extends Component {
	render() {
		return (
			<div>
				{/*<span>
					Author: <Link to={'/profile/'+this.props.currentComment.username}>
						{this.props.currentComment.username}
					</Link>
				</span><br/>*/}
				<h1 style={style.eachComment.schoolName}>{this.props.currentComment.name}</h1><br/>
				<span style={style.eachComment.schoolAddress}>Address: {this.props.currentComment.address}</span><br/>
				<span style={style.eachComment.schoolAddress}>Phone: {this.props.currentComment.phone}</span><br/>
				<span style={style.eachComment.schoolAddress}>Website: {this.props.currentComment.website}</span><br/>
				<hr />
			</div>
		)
	}
}

export default Comment;
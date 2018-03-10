import React, {Component} from 'react';

class CreateComment extends Component {
	constructor() {
		super();
		this.state = {
			comment: {
				username: '',
				body:''
			}
		}
	}

	updateComment(event) {
		let updatedComment = Object.assign({}, this.state.comment);
		updatedComment[event.target.id] = event.target.value;
		this.setState({
			comment: updatedComment
		})
	}

	submitComment() {
		this.props.onCreate(this.state.comment);
		let updatedObject = Object.assign({}, this.state.comment);
		updatedObject.name = '';
		updatedObject.address = '';
		updatedObject.phone = '';
		updatedObject.website = '';

		this.setState({
			comment: updatedObject
		})
	}

	render() {
		return (
			<div>

				{/*<h1>Create Comment</h1>
				<input value={this.state.comment.name} onChange={this.updateComment.bind(this)} id="name" className="form-control" type="text" placeholder="Name" />
				<input value={this.state.comment.address} onChange={this.updateComment.bind(this)} id="address" className="form-control" type="text" placeholder="Address" />
				<input value={this.state.comment.phone} onChange={this.updateComment.bind(this)} id="phone" className="form-control" type="text" placeholder="Phone" />
				<input value={this.state.comment.website} onChange={this.updateComment.bind(this)} id="website" className="form-control" type="text" placeholder="Website" />
				<button onClick={this.submitComment.bind(this)} className="btn btn-info" >Submit Comment</button>
				*/}
			</div>
		)
	}
}

export default CreateComment;
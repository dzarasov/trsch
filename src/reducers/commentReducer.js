import constants from '../constants/constants';

const initialState = {
	// list: [],
	map: {}
}

export default (state=initialState, action) => {
	var updated = Object.assign({}, state);
	var updatedMap = Object.assign({}, updated.map);

	switch(action.type) {
		
		case constants.COMMENTS_RECEIVED:
			let zoneComments = updatedMap[action.zone._id];
			console.log('before creating: ', zoneComments);
			if(zoneComments == null) {
				zoneComments = [];
			} else {
				zoneComments = Object.assign([], zoneComments);
			}
			action.comments.forEach((comment, i) => {
				zoneComments.push(comment);
			})

			updatedMap[action.zone._id] = zoneComments;
			updated['map'] = updatedMap;
			return updated;

		case constants.SELECTED_ZONE:
			return updated; // this is equivalent to this.setState({ ... })	

		case constants.COMMENT_CREATED:
			console.log("Comment created: ", action.comment);

			let commentsList = updatedMap[action.comment.zone];
			console.log('before creating [from COMMENT_CREATED action]: ', commentsList);
			if(commentsList == null) {
				commentsList = [];
			} else {
				commentsList = Object.assign([], commentsList);
			}
			commentsList.push(action.comment);
			updatedMap[action.comment.zone] = commentsList;
			updated['map'] = updatedMap;
			return updated; // this is equivalent to this.setState({ ... })	

		default: 
			return state
	}
}
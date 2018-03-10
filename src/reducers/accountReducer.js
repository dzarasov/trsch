import constants from '../constants/constants';

const initialState = {
	user: null
}

export default (state=initialState, action) => {
	const updated = Object.assign({}, state);

	switch(action.type) {
		case constants.CURRENT_USER_RECEIVED:
			updated['user'] = action.user;
			console.log('CURRENT_USER_RECEIVED: ', action.user)
			return updated; // this is equivalent to this.setState({ ... })	
		default: 
			return state
	}
}
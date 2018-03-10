import constants from '../constants/constants';

const initialState = {
	list: []
}

export default (state=initialState, action) => {
	let updated = Object.assign({}, state);
	switch (action.type) {
		case constants.PROFILE_RECEIVED:
			console.log('PROFILE_RECEIVED: ' + JSON.stringify(action.profile));
			updated['list'] = [action.profile];
			return updated;

		default:
			return state
	}
}
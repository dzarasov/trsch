import constants from '../constants/constants';

const initialState = {
	selectedZone: 999,
	list: []
}

export default (state=initialState, action) => {
	let updated = Object.assign({}, state);
	switch (action.type) {

		case constants.ZONES_RECIEVED:
			updated['list'] = action.zones;
			return updated; // this is equivalent to this.setState({ ... })

		case constants.ZONE_CREATED:
			let updatedList = Object.assign([], updated.list);
			updatedList.push(action.zone);
			updated['list'] = updatedList;
			return updated; // this is equivalent to this.setState({ ... })

		case constants.SELECTED_ZONE:
			updated['selectedZone'] = action.selectedZone;
			return updated; // this is equivalent to this.setState({ ... })

		default:
			return state
	}
}
import { actionTypes } from "../actions/members";

let members = JSON.parse(localStorage.getItem('members'))

const initialState = {
	members: null,
}

const MembersReducer = (state = members || initialState, action) => {
	let newState = state;
	switch (action.type) {
		case actionTypes.SET_MEMBERS: {
			newState = {
				...state,
				members: action.payload,
			};

			break;
		}

		default: {
			newState = state;

			break;
		}
	}
	if (newState) {
		localStorage.setItem('members', JSON.stringify(newState));
	} else {
		localStorage.removeItem('members')
	}
	return newState
};

export default MembersReducer;

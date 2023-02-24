import { actionTypes } from "../actions/contact";

let contact = JSON.parse(localStorage.getItem('contact'))

const initialState = {
	federationUnits: null,
	districts: null
}

const ContactReducer = (state = contact || initialState, action) => {
	let newState = state;
	switch (action.type) {
		case actionTypes.SET_STATES: {
			newState = {
				...state,
				federationUnits: action.payload,
			};

			break;
		}

		case actionTypes.SET_DISTRICTS: {
			newState = {
				...state,
				districts: action.payload,
			};

			break;
		}

		default: {
			newState = state;

			break;
		}
	}
	if (newState) {
		localStorage.setItem('contact', JSON.stringify(newState));
	} else {
		localStorage.removeItem('contact')
	}
	return newState
};

export default ContactReducer;

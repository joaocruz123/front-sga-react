import { actionTypes } from "../actions/address";

let address = JSON.parse(localStorage.getItem('address'))

const initialState = {
	address: null,
	cep: null,
	addressByCEP: null,
	userAddress: null
}

const AddressReducer = (state = address || initialState, action) => {
	let newState = state;
	switch (action.type) {
		case actionTypes.SET_CEP: {
			newState = {
				...state,
				cep: action.payload,
			};

			break;
		}

		case actionTypes.SET_ADDRESS_BY_CEP: {
			newState = {
				...state,
				addressByCEP: action.payload,
			};

			break
		}

		case actionTypes.SET_ADDRESS: {
			newState = {
				...state,
				address: action.payload,
			};
			break
		}

		case actionTypes.SET_USER_ADDRESS: {
			newState = {
				...state,
				userAddress: action.payload,
			};
			break
		}

		case actionTypes.SET_GEOLOCATION: {
			newState = {
				...state,
				...action.payload,
			};
			break
		}

		default: {
			newState = state;

			break;
		}
	}
	if (newState) {
		localStorage.setItem('address', JSON.stringify(newState));
	} else {
		localStorage.removeItem('address')
	}
	return newState
};

export default AddressReducer;

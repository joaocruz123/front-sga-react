import { actionTypes } from "../actions/auth";

let auth = JSON.parse(localStorage.getItem('auth'))

const initialState = {
	auth: null,
	signUp: {},
	requiredAuth: false,
	methodAccess: null,
}

const AuthReducer = (state = auth || initialState, action) => {
	let newState = state;
	switch (action.type) {
		case actionTypes.SET_ACCESS_USER: {
			newState = {
				...state,
				auth: action.payload,
			};

			break;
		}

		case actionTypes.SET_REQUIRED: {
			newState = {
				...state,
				requiredAuth: action.payload,
			};

			break;
		}

		case actionTypes.SET_SIGN_UP: {
			newState = {
				...state,
				signUp: action.payload,
			};

			break;
		}

		case actionTypes.SET_METHOD_LOGIN: {
			newState = {
				...state,
				methodAccess: action.payload,
			};

			break;
		}

		default: {
			newState = state;

			break;
		}
	}
	if (newState) {
		localStorage.setItem('auth', JSON.stringify(newState));
	} else {
		localStorage.removeItem('auth')
	}
	return newState
};

export default AuthReducer;

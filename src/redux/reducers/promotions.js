import { actionTypes } from "../actions/promotions";

let promotions = JSON.parse(localStorage.getItem('promotions'))

const initialState = {
	promotions: null,
}

const PromotionsReducer = (state = promotions || initialState, action) => {
	let newState = state;
	switch (action.type) {
		case actionTypes.SET_PRODUCTS_PROMOTIONS: {
			newState = {
				...state,
				promotions: action.payload,
			};

			break;
		}

		default: {
			newState = state;

			break;
		}
	}
	if (newState) {
		localStorage.setItem('promotions', JSON.stringify(newState));
	} else {
		localStorage.removeItem('promotions')
	}
	return newState
};

export default PromotionsReducer;

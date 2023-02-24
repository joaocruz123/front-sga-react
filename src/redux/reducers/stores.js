import { actionTypes } from "../actions/stores";

let stores = JSON.parse(localStorage.getItem('stores'))

const initialState = {
    stores: null,
    selectedStore: null,
    locationSelectedStore: null,
    markets: null
}

const StoreReducer = (state = stores || initialState, action) => {
    let newState = state;
    switch (action.type) {
        case actionTypes.GET_STORES_BY_ADDRESS: {
            newState = {
                ...state,
                stores: action.payload,
            };
            break;
        }
        case actionTypes.SET_SELECTED_STORE: {
            newState = {
                ...state,
                selectedStore: action.payload,
            };
            break;
        }
        case actionTypes.GET_LATLONG_STORE: {
            newState = {
                ...state,
                locationSelectedStore: action.payload
            };
            break;
        }
        default: {
            newState = state;
            break;
        }
    }
    if (newState) {
        localStorage.setItem('stores', JSON.stringify(newState));
    } else {
        localStorage.removeItem('stores')
    }
    return newState
};

export default StoreReducer;
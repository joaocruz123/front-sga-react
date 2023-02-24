import { actionTypes } from "../actions/menu";

let menu = JSON.parse(localStorage.getItem('menu'))

const initialState = {
	categories: null,
	textSearch: '',
	filteredCategories: null,
	availablesCategories: null,
}

const MenuReducer = (state = menu || initialState, action) => {
	let newState = state;
	switch (action.type) {
		case actionTypes.SET_MENU_STORE: {
			const filteredNameCategories = action.payload && action.payload.map((categories) => categories.name)

			newState = {
				...state,
				categories: action.payload,
				availablesCategories: filteredNameCategories ? filteredNameCategories : null
			};

			break;
		}
		case actionTypes.SET_FILTERED_MENU_STORE: {
			newState = {
				...state,
				filteredCategories: action.payload,
			};

			break;
		}
		case actionTypes.SET_TEXT_SEARCH: {
			newState = {
				...state,
				textSearch: action.payload,
			};

			break;
		}
		case actionTypes.SET_SELECTED_CATEGORY: {
			const filteredProducts = newState.value && newState.value.categories && newState.value.categories.filter(filteredItem => filteredItem.name === action.payload.name)
      const newProducts = filteredProducts && filteredProducts[0] && filteredProducts[0].products

      Object.assign(newState, {
        value: {
          ...newState.value,
          store: {
            ...newState.value.store,
            products: newProducts,
            selectedCategory: action.payload
          }
        }
      })

      break
		}
      
		default: {
			newState = state;

			break;
		}
	}
	if (newState) {
		localStorage.setItem('menu', JSON.stringify(newState));
	} else {
		localStorage.removeItem('menu')
	}
	return newState
};

export default MenuReducer;

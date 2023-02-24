import { mapStoreData } from "../mappers/menu";

export const actionTypes = {
	SET_MENU_STORE: 'SET_MENU_STORE',
	GET_LATLONG_STORE: 'GET_LATLONG_STORE',
	SET_SELECTED_STORE: 'SET_SELECTED_STORE',
	SET_TEXT_SEARCH: 'SET_TEXT_SEARCH',
	SET_FILTERED_MENU_STORE: 'SET_FILTERED_MENU_STORE',
	SET_AVAILABLE_CATEGORIES: 'SET_AVAILABLE_CATEGORIES'
}

export const fetchMenuStore = (storeId) => async (dispatch, getState, api) => {
	let result = {}
	try {
		const url = `/Estabelecimentos/ObterCardapio/${storeId}`;
		const apiResponse = await api.get(url, {});

		const response = mapStoreData(apiResponse.data);
		
		result = {
			success: true,
			data: response
		}
		dispatch({
			type: actionTypes.SET_MENU_STORE,
			payload: response
		})
	} catch (e) {
		result = {
			error: e.message
		}
	}
	return result;
}

export const setTextSearch = (value) => ({
	type: actionTypes.SET_TEXT_SEARCH,
	payload: value
})

export const setFilterdMenu = (filtered) => ({
	type: actionTypes.SET_FILTERED_MENU_STORE,
	payload: filtered
})

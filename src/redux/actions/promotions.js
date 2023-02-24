import { mapStoreProductsPromotional } from "../mappers/promotions";

export const actionTypes = {
	SET_PRODUCTS_PROMOTIONS: 'SET_PRODUCTS_PROMOTIONS',
}

export const fetchProductsPromotionals = () => async (dispatch, getState, api) => {
	let result = {}
	try {
		const url = `/produtospromocionais/listar`;
		const apiResponse = await api.get(url, {});

		const response = mapStoreProductsPromotional(apiResponse.data);
		
		result = {
			success: true,
			data: response
		}
		
		dispatch({
			type: actionTypes.SET_PRODUCTS_PROMOTIONS,
			payload: response
		})

		return result
	} catch (e) {
		result = {
			error: e.message
		}
	}
	return result;
}

import {  mapFetchMembersResponse } from "../mappers/members";

export const actionTypes = {
	SET_MEMBERS: 'SET_MEMBERS',
}

export const fetchMembers = (page) => async (dispatch, getState, api) => {
	let result = {}
	try {
		const url = `api/membros?page=${page}`;
		const apiResponse = await api.get(url, {});
		const response = mapFetchMembersResponse(apiResponse.data.data);
		
		result = {
			...apiResponse.data,
			data: response
		}
		dispatch({
			type: actionTypes.SET_MEMBERS,
			payload: response
		})
	} catch (e) {
		result = {
			error: e.message
		}
	}
	return result;
}
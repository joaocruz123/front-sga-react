import axios from "axios";
import { GOOGLE_API_KEY, STORES_LIMIT } from "../../config";
import { mapFetchStoresByAddressResponse } from "../mappers/stores";

export const actionTypes = {
    GET_STORES_BY_ADDRESS: 'GET_STORES_BY_ADDRESS',
    GET_LATLONG_STORE: 'GET_LATLONG_STORE',
    SET_SELECTED_STORE: 'SET_SELECTED_STORE'
}

export const fetchStoresByAddress = ({ lat, long }) => async (dispatch, getState, api) => {
    let result = {}
    const limit = STORES_LIMIT
    try {
        const url = `/Estabelecimentos/ListarInstitucional?offset=0&limit=${limit}&latitude=${lat}&longitude=${long}`;
        const apiResponse = await api.get(url, {});

        const response = mapFetchStoresByAddressResponse(apiResponse.data);

        //dispatch(setSelectedStoreByAddress(response[0]))
        result = {
            success: true,
            data: response
        }
        dispatch({
            type: actionTypes.GET_STORES_BY_ADDRESS,
            payload: response
        })
    } catch (e) {
        result = {
            error: e.message
        }
    }
    return result;
}

export const setSelectedStoreByAddress = (store) => ({
    type: actionTypes.SET_SELECTED_STORE,
    payload: store
})

export const setRemoveSelectedStoreByAddress = (store) => ({
    type: actionTypes.SET_SELECTED_STORE,
    payload: store
})

export const setRemoveStoresByAddress = (store) => ({
    type: actionTypes.GET_STORES_BY_ADDRESS,
    payload: store
})

export const getLatitudeLongitude = (address) => async (dispatch, getState, externalApi) => {
    let result = {}
    const formattedAddress = address
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${formattedAddress}&key=${GOOGLE_API_KEY}`

    try {
        const apiResponse = await axios.get(url);
        const response = apiResponse.data;

        const location = response?.results[0]?.geometry?.location
        
        result = {
            success: true,
            data: location
        }
        dispatch({
            type: actionTypes.GET_LATLONG_STORE,
            payload: location
        })
    } catch (e) {
        result = {
            error: e.message
        }
    }
    return result;
}

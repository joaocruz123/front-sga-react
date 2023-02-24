import { GOOGLE_API_KEY } from "../../config"
import { mapAddressByCEP, mapAddressCreateDataDelivery, mapAddressCreateDataPickup } from "../mappers/address"
import axios from 'axios'

export const actionTypes = {
  SET_CEP: 'SET_CEP',
  SET_ADDRESS_BY_CEP: 'SET_ADDRESS_BY_CEP',
  SET_ADDRESS: 'SET_ADDRESS',
  SET_USER_ADDRESS: 'SET_USER_ADDRESS',
  SET_GEOLOCATION: 'SET_GEOLOCATION'
}

export const setCEP = (cep) => (dispatch) => {
  dispatch({
    type: actionTypes.SET_CEP,
    payload: cep
  })
}

export const setAddressByCEP = (address) => async (dispatch, getState, api) => {
  dispatch({
    type: actionTypes.SET_ADDRESS_BY_CEP,
    payload: address
  })
}

export const setAddress = (address) => async (dispatch, getState, api) => {
  dispatch({
    type: actionTypes.SET_ADDRESS,
    payload: address
  })
}

export const setUserAddress = (userAddress) => async (dispatch, getState, api) => {
  dispatch({
    type: actionTypes.SET_USER_ADDRESS,
    payload: userAddress
  })
}

export const setGeolocation = (geolocation) => async (dispatch, getState, api) => {
  dispatch({
    type: actionTypes.SET_GEOLOCATION,
    payload: geolocation
  })
}
export const fetchStoresList = (callback) => async (dispatch, getState, api) => {
  const callbackErrorFilter = callback && callback.filter(filteredItem => filteredItem.name === 'address-stores-list' && filteredItem.type === 'error')
  const callbackError = callbackErrorFilter && callbackErrorFilter[0] && callbackErrorFilter[0].callback
  const callbackSuccessFilter = callback && callback.filter(filteredItem => filteredItem.name === 'address-stores-list' && filteredItem.type === 'success')
  const callbackSuccess = callbackSuccessFilter && callbackSuccessFilter[0] && callbackSuccessFilter[0].callback
  const callbackDataFilter = callback && callback.filter(filteredItem => filteredItem.name === 'address-stores-list' && filteredItem.type === 'data')
  const callbackData = callbackDataFilter && callbackDataFilter[0] && callbackDataFilter[0].data
  const callbackModalityFilter = callback && callback.filter(filteredItem => filteredItem.name === 'address-stores-list' && filteredItem.type === 'modality')
  const callbackModality = callbackModalityFilter && callbackModalityFilter[0] && callbackModalityFilter[0].modality
  try {
		const url = callbackModality === 'delivery' ? `/Estabelecimentos/ListarDelivery` : `/Estabelecimentos/Listar`
		const dto = callbackModality === 'delivery' ? mapAddressCreateDataDelivery(callbackData) : mapAddressCreateDataPickup(callbackData)
		const apiResponse = await api.post(url, dto)

		const result = apiResponse.data && apiResponse.data.Restaurantes

		if (result && result.length > 0) {
      callbackSuccess && callbackSuccess()

			return result
		}

    callbackError && callbackError()
		return result
	} catch (e) {
    callbackError && callbackError()

		console.log(e)
	}
}

export const fetchAddressByCEP = (callback) => async (dispatch, getState, api) => {
  const callbackErrorFilter = callback && callback.filter(filteredItem => filteredItem.name === 'address-by-cep' && filteredItem.type === 'error')
  const callbackError = callbackErrorFilter && callbackErrorFilter[0] && callbackErrorFilter[0].callback
  const callbackSuccessFilter = callback && callback.filter(filteredItem => filteredItem.name === 'address-by-cep' && filteredItem.type === 'success')
  const callbackSuccess = callbackSuccessFilter && callbackSuccessFilter[0] && callbackSuccessFilter[0].callback

  try {
    const cep = getState().address.cep
    const noMaskCep = cep.replace(/\.|-/g, '')

    const url = `https://viacep.com.br/ws/${noMaskCep}/json/`
    const result = await axios.get(url)
    const mappedResult = mapAddressByCEP(result.data)

    const stateAddress = getState().address && getState().address.address
    const latitude = (getState().address && getState().address.latitude) || 0
    const longitude = (getState().address && getState().address.longitude) || 0

    if (!!mappedResult.main) {
      const fullAddress = {
        latitude,
        longitude,
        ...stateAddress,
        ...mappedResult,
        pristine: true
      }

      dispatch(setAddressByCEP(fullAddress))
      dispatch(setAddress(fullAddress))
      dispatch(setUserAddress(fullAddress))

      await dispatch(fetchGeolocation(mappedResult))

      callbackSuccess && callbackSuccess()

      return
    }

    if (!!mappedResult.error) {
      dispatch(setAddress(null))
      dispatch(setAddressByCEP(null))

      return
    }
  } catch (e) {
    callbackError && callbackError()

    console.log(e)
  }
}

export const fetchAddressByLatLong = ({ latitude, longitude }) => async (dispatch, getState, api) => {
  try {
    const formattedLatLong = `${latitude},${longitude}`
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${formattedLatLong}&key=${GOOGLE_API_KEY}`
    const result = await axios.get(url)

    const {
      data
    } = result

    const {
      results
    } = data

    if (results.length) {
      const componentes = results[0].address_components
      const postalCode = componentes && componentes.find((item) => {
        const search = item.types.find((key) => key === 'postal_code')
        return search
      })
      return postalCode
    }
  } catch (e) {
    console.log(e)
  }
}

export const fetchGeolocation = (address) => async (dispatch, getState, api) => {
  try {
    const fullAddress = address && address.main && address.number && address.neighborhood && `${address.main}, ${address.number} - ${address.neighborhood}, ${address.city} - ${address.state}, ${address.cep}, Brasil`;
    const almostFullAddress = address && address.main && !address.number && address.neighborhood && `${address.main}, 1 - ${address.neighborhood}, ${address.city} - ${address.state}, ${address.cep}, Brasil`;
    const formattedAddress = almostFullAddress || fullAddress
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${formattedAddress}&key=${GOOGLE_API_KEY}`
    const result = await axios.get(url)

    const {
      data
    } = result

    const {
      results
    } = data

    if (results.length) {
      const {
        lat,
        lng
      } = results[0].geometry.location

      dispatch(setGeolocation({
        latitude: lat,
        longitude: lng
      }))

      dispatch(setAddress({
        ...address,
        latitude: lat,
        longitude: lng
      }))
    }
  } catch (e) {
    console.log(e)
  }
}
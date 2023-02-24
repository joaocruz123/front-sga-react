import axios from 'axios'
import { mapMessageContactUs } from '../mappers/contact'

export const actionTypes = {
  SET_STATES: 'SET_STATES',
  SET_DISTRICTS: 'SET_DISTRICTS'
}

export const setFederationUnits = (federationUnits) => async (dispatch, getState, api) => {
  dispatch({
    type: actionTypes.SET_STATES,
    payload: federationUnits
  })
}

export const setDistricts = (districts) => async (dispatch, getState, api) => {
  dispatch({
    type: actionTypes.SET_DISTRICTS,
    payload: districts
  })
}

export const fetchFederationUnits = () => async (dispatch, getState, api) => {
  try {
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`
    const result = await axios.get(url)

    if (result) {
      dispatch(setFederationUnits(result.data))
    }

    return result.data
  } catch (e) {
    console.log(e)
  }
}

export const fetchDistrictsByFederationUnits = (federationUnits) => async (dispatch, getState, api) => {
  try {
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${federationUnits}/municipios`
    const result = await axios.get(url)

    if (result) {
      dispatch(setDistricts(result.data))
    }

    return result.data
  } catch (e) {
    console.log(e)
  }
}

export const postMessageContactUs = (callback) => async (dispatch, getState, api) => {
  const callbackErrorFilter = callback && callback.filter(filteredItem => filteredItem.name === 'message-contact' && filteredItem.type === 'error')
  const callbackError = callbackErrorFilter && callbackErrorFilter[0] && callbackErrorFilter[0].callback
  const callbackSuccessFilter = callback && callback.filter(filteredItem => filteredItem.name === 'message-contact' && filteredItem.type === 'success')
  const callbackSuccess = callbackSuccessFilter && callbackSuccessFilter[0] && callbackSuccessFilter[0].callback
  const callbackDataFilter = callback && callback.filter(filteredItem => filteredItem.name === 'message-contact' && filteredItem.type === 'data')
  const callbackData = callbackDataFilter && callbackDataFilter[0] && callbackDataFilter[0].data
  try {
		const url = `/FaleConosco/ContatoInstitucional`
		const dto = mapMessageContactUs(callbackData)
		const apiResponse = await api.post(url, dto)

		const result = apiResponse.data && apiResponse.data.Sucesso

		if (result) {
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
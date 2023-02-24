import { GTM_KEY } from "../../config";
import { mapFetchEvidenceResponse, mapFetchHighlightsResponse, mapFetchHighlightsWorkResponse } from "../mappers/ui";

export const actionTypes = {
    GET_GROUPS_HIGHLIGHTS: 'GET_GROUPS_HIGHLIGHTS',
    GET_FEED_HIGHLIGHTS: 'GET_FEED_HIGHLIGHTS',
    SET_NEW_OPEN_HOURS: 'SET_NEW_OPEN_HOURS',
    SET_SCROLL_STORE: 'SET_SCROLL_STORE',
    SET_GTM: 'SET_GTM'
}

export const setScrollStore = (scroll) => (dispatch) => {
    dispatch({
        type: actionTypes.SET_SCROLL_STORE,
        payload: scroll
    })
}

export const setGTM = (gtm) => async (dispatch) => {
    console.log(gtm)
    dispatch({
        type: actionTypes.SET_GTM,
        payload: gtm
    })
}

export const getGTM = () => (dispatch, getState) => {
    const gtm = getState().ui.gtm

    return gtm
}

export const fetchGroupsHighlights = (typePlatform) => async (dispatch, getState, api) => {
    let result = {}
    try {
        const url = `Grupos/Listar?tipoGrupo=1&tipoPlataforma=${typePlatform}`;
        const apiResponse = await api.get(url, {});

        const response = mapFetchHighlightsResponse(apiResponse.data);
        result = {
            success: true,
            data: response
        }
        dispatch({
            type: actionTypes.GET_GROUPS_HIGHLIGHTS,
            payload: response
        })
    } catch (e) {
        result = {
            error: e.message
        }
    }
    return result;
}

export const fetchFeedHighlightsWork = ({ typePlatform, typeModule }) => async (dispatch, getState, api) => {
    let result = {}
    try {
        const url = `destaques/listar?tipoPlataforma=${typePlatform}&tipoModulo=${typeModule}`;
        const apiResponse = await api.get(url, {});

        const response = mapFetchHighlightsWorkResponse(apiResponse.data);
        result = {
            success: true,
            data: response
        }
        dispatch({
            type: actionTypes.GET_GROUPS_HIGHLIGHTS,
            payload: response
        })
    } catch (e) {
        result = {
            error: e.message
        }
    }
    return result;
}

export const fetchFeedHighlights = () => async (dispatch, getState, api) => {
    let result = {}
    try {
        const url = `destaques/listar?tipoPlataforma=3`;
        const apiResponse = await api.get(url, {});

        const response = mapFetchEvidenceResponse(apiResponse.data);
        result = {
            success: true,
            data: response
        }
        dispatch({
            type: actionTypes.GET_FEED_HIGHLIGHTS,
            payload: response
        })
    } catch (e) {
        result = {
            error: e.message
        }
    }
    return result;
}

export const handleGTM = (data) => {
    return (dispatch) => {
        if (GTM_KEY && GTM_KEY !== 'false') {
            // ('Event: ', data)
        }

        if (GTM_KEY && GTM_KEY !== 'false' && !data) {
            dispatch(setGTM({
                events: null
            }))

            return
        }

        if (GTM_KEY && GTM_KEY !== 'false' && data && data.unique === true) {
            const gtm = dispatch(getGTM())

            const {
                events
            } = gtm

            const {
                eventId
            } = data

            const hasCalled = (events && events.filter(filteredItem => filteredItem.event === eventId)[0]) || false

            if (!hasCalled) {
                const newData = {
                    ...data
                }

                delete newData.eventId
                delete newData.unique

                const newEvents = [
                    ...(events && events.length ? events : []),
                    data
                ]

                const newGTM = {
                    ...gtm,
                    events: newEvents
                }

                dispatch(setGTM(newGTM))

                window.dataLayer.push(newData)

                return
            }
        }

        if (GTM_KEY && GTM_KEY !== 'false' && data) {
            const gtm = dispatch(getGTM())

            const {
                events
            } = gtm

            const newEvents = [
                ...(events && events.length ? events : []),
                data
            ]

            const newGTM = {
                ...gtm,
                events: newEvents
            }

            console.log(newGTM)

            dispatch(setGTM(newGTM))

            window.dataLayer.push(data)
        }
    }
}
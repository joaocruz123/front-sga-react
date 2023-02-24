import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from 'redux-thunk';
import axios from 'axios';
import { composeWithDevTools } from 'redux-devtools-extension';
import { API_URL } from '../config'
import uuidv4 from 'uuid/v4'

const getDeviceToken = () => {
  const savedToken = localStorage.getItem('deviceToken')
  if (savedToken) return savedToken

  const newToken = uuidv4()
  localStorage.setItem('deviceToken', newToken)
  return newToken
}

const localStorageItem = { value: 'auth' }
const getUser = (item) => JSON.parse(localStorage.getItem(item))
const user = getUser(localStorageItem.value)
const accessToken = ((user && user.accessToken) || (user && user.auth && user.auth.accessToken))

const api = axios.create({
  responseType: 'json',
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${accessToken}`
  }
});

// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async function (error) {
//     const access_token = localStorage.getItem("access_token");
//     if (error.response.status === 401 && access_token) {
//       const response = await refreshToken(error);
//       return response;
//     }
//     return Promise.reject(error);
//   }
// );

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api))
  ),
);

export default store;

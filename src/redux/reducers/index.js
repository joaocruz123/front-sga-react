import { combineReducers } from "redux";
import auth from './auth'
import member from './members'

export default combineReducers({ auth, member });

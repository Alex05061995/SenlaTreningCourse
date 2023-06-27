import { combineReducers } from "redux"
import sliceUsers from './userReducer'

export const rootReducer = combineReducers({
    sliceUsers
})
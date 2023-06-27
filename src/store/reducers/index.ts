import { combineReducers } from '@reduxjs/toolkit'
import { usersSlice } from './userReducer'

export const rootReducers = combineReducers({
  users: usersSlice.reducer
})
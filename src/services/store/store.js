import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {reducer as listReducer} from './slices/list.slice'

const reducers = combineReducers({
  listReducer,
})

export const store = configureStore({
  reducer: reducers,
  devTools: true,
})

export default store
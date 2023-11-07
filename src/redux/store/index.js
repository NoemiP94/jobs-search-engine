import { combineReducers, configureStore } from '@reduxjs/toolkit'
import favouriteReducer from '../reducers/favourite'
import searchReducer from '../reducers/search'

const bigReducer = combineReducers({
  favourite: favouriteReducer,
  search: searchReducer,
})

const store = configureStore({
  reducer: bigReducer,
})

export default store

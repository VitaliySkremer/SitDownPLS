import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import productReducer from './reducers/ProductsSlice'

const rootReducer = combineReducers({
  productReducer
})

export const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
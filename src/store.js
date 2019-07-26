import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import RootReducer from './reducers'

export const middlewares = [ReduxThunk]

export const storeWithMiddleware = applyMiddleware(...middlewares)(createStore)

export const store = storeWithMiddleware(RootReducer)

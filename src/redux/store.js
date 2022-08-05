import { createStore, combineReducers, applyMiddleware } from 'redux'
import LaptopReducer from './reducers/laptopReducer'
import MobileReducer from './reducers/MobileReducer'
import UserReducer from './reducers/userReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const rootReducer = combineReducers({
  laptops: LaptopReducer,
  mobiles: MobileReducer,
  users: UserReducer,
})
const store = createStore(rootReducer, applyMiddleware(thunk, logger))
export default store

import checkPropTypes from 'check-prop-types'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import { middlewares } from '../store'

const testStore = initialState => {
  const storeWithMiddleware = applyMiddleware(...middlewares)(createStore)
  return storeWithMiddleware(rootReducer, initialState)
}

const findByIdTest = (component, id) => {
  return component.find(`[id-test='${id}']`)
}

const checkProps = (component, expectedProps) => {
  return checkPropTypes(
    /* eslint-disable react/forbid-foreign-prop-types */
    component.propTypes,
    expectedProps,
    'props',
    component.name
  )
}

export { findByIdTest, checkProps, testStore }

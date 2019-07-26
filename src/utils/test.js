import checkPropTypes from 'check-prop-types'

const findByIdTest = (component, id) => {
  return component.find(`[id-test='${id}']`)
}

const checkProps = (component, expectedProps) => {
  return checkPropTypes(
    component.propTypes,
    expectedProps,
    'props',
    component.name
  )
}

export { findByIdTest, checkProps }

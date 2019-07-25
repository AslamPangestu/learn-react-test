import React from 'react'
import { shallow } from 'enzyme'
import Header from './index'
import { findByIdTest } from "../../utils/test";

const setup = (props = {}) => {
  return shallow(<Header {...props} />)
}

describe('Header Component', () => {
  let component
  beforeEach(() => {
    component = setup()
  })
  // Example testing using classname
  // it('Should render without errors', () => {
  //   const container = component.find('.headerComponent')
  //   expect(container.length).toBe(1)
  // })
  it('Should render without errors', () => {
    const logo = findByIdTest(component, 'headerComponent')
    expect(logo.length).toBe(1)
  })
  it('Should render a logo', () => {
    const logo = findByIdTest(component, 'logoImage')
    expect(logo.length).toBe(1)
  })
})

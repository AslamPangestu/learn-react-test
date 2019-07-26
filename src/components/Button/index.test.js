import React from 'react'
import { shallow } from 'enzyme'
import { findByIdTest, checkProps } from '../../utils/test'
import Button from './index'

describe('Button Component', () => {
  describe('Checking Proptypes', () => {
    it('Should not throw warning', () => {
      const expectedProps = {
        buttonText: 'Title Button',
        emitEvent: () => {}
      }
      const propsErr = checkProps(Button, expectedProps)
      expect(propsErr).toBeUndefined()
    })
  })
  describe('Renders', () => {
    let container
    beforeEach(() => {
      const props = {
        buttonText: 'Title Button',
        emitEvent: () => {}
      }
      container = shallow(<Button {...props} />)
    })
    it('Should render button', () => {
      const button = findByIdTest(container, 'buttonComponent')
      expect(button.length).toBe(1)
    })
  })
})

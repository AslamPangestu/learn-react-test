import React from 'react'
import { shallow } from 'enzyme'
import Headline from './index'
import { findByIdTest, checkProps } from '../../utils/test'

const setup = (props = {}) => {
  return shallow(<Headline {...props} />)
}

describe('Headline Component', () => {

  //Checking props
  describe('Have props', () => {
    let container
    beforeEach(() => {
      const props = {
        header: 'Test Header',
        desc: 'Test Description'
      }
      container = setup(props)
    })
    it('Should render without errors', () => {
      const component = findByIdTest(container, 'HeadlineComponent')
      expect(component.length).toBe(1)
    })
    it('Should render a header', () => {
      const h1 = findByIdTest(container, 'header')
      expect(h1.length).toBe(1)
    })
    it('Should render a desc', () => {
      const p = findByIdTest(container, 'desc')
      expect(p.length).toBe(1)
    })
  })
  describe('Have No Props', () => {
    let container
    beforeEach(() => {
      container = setup()
    })
    it('Should not render', () => {
      const component = findByIdTest(container, 'HeadlineComponent')
      expect(component.length).toBe(0)
    })
  })

  //Checking prop types
  describe('Checking Proptypes', () => {
    it('Should not throw warning', () => {
      const expectedProps = {
        header: 'Test Header',
        desc: 'Test Desc',
        tempArray: [
          {
            first_name: 'Test First Name',
            last_name: 'Test Last Name',
            email: 'test@mail.com',
            age: 23,
            status: false
          }
        ]
      }
      const propsErr = checkProps(Headline, expectedProps)
      expect(propsErr).toBeUndefined()
    })
  })
})

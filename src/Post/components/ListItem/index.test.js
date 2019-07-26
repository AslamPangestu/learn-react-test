import React from 'react'
import { shallow } from 'enzyme'
import { findByIdTest, checkProps } from '../../../utils/test'
import ListItem from './index'

describe('List Item Component', () => {
  describe('Checking proptypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        title: 'Title',
        content: 'Content'
      }
      const propsErr = checkProps(ListItem, expectedProps)
      expect(propsErr).toBeUndefined()
    })
  })

  describe('Component render', () => {
    let container
    beforeEach(() => {
      const props = {
        title: 'Title',
        content: 'Content'
      }
      container = shallow(<ListItem {...props} />)
    })
    it('Should render without error', () => {
      const component = findByIdTest(container, 'listItemComponent')
      expect(component.length).toBe(1)
    })

    it('Should render tittle', () => {
      const title = findByIdTest(container, 'titleComponent')
      expect(title.length).toBe(1)
    })
    it('Should render content', () => {
      const content = findByIdTest(container, 'contentComponent')
      expect(content.length).toBe(1)
    })
  })

  describe('Should not render', () => {
    let container
    beforeEach(() => {
      const props = {
        content: 'Content'
      }
      container = shallow(<ListItem {...props} />)
    })

    it('Component not rendered', () => {
      const component = findByIdTest(container, 'listItemComponent')
      expect(component.length).toBe(0)
    })
  })
})

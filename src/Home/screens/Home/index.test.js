import React from 'react'
import { shallow } from 'enzyme'
import { testStore, findByIdTest } from '../../../utils/test'
import Home from './index'

const setup = (initialState = {}) => {
  const store = testStore(initialState)
  return shallow(<Home store={store} />)
    .childAt(0)
    .dive()
}

describe('Root Component', () => {
  let container
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: 'Title 1',
          body: 'Body'
        },
        {
          title: 'Title 2',
          body: 'Body'
        },
        {
          title: 'Title 3',
          body: 'Body'
        }
      ]
    }
    container = setup(initialState)
  })
  it('Should render without error', () => {
    const component = findByIdTest(container, 'homeComponent')
    expect(component.length).toBe(1)
  })
})

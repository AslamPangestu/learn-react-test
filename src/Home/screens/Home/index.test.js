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
  let classInstance
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
    classInstance = container.instance()
  })
  it('Should render without error', () => {
    const component = findByIdTest(container, 'homeComponent')
    expect(component.length).toBe(1)
  })

  //testing state
  it('hideButton Method should update state as expected', () => {
    classInstance.hideButton()
    const newState = classInstance.state.hideBtn
    expect(newState).toBe(true)
  })
  //testing return value
  it('returnValue Method should return value as expected', () => {
    const newValue = classInstance.returnValue(6)
    expect(newValue).toBe(7)
  })
})

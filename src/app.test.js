import React from 'react'
import { shallow } from 'enzyme'
import { testStore, findByIdTest } from './utils/test'
import App from './App'

const setup = (initialState = {}) => {
  const store = testStore(initialState)
  const wrapper = shallow(<App store={store} />)
  //Debug Shallow render
  console.log(wrapper.debug())
  return wrapper
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
    const component = findByIdTest(container, 'rootComponent')
    expect(component.length).toBe(1)
  })
})

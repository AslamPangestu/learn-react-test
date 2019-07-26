import { types } from './types'
import reducer from './reducer'

describe('Posts Reducer', () => {
  it('Should return default state', () => {
    const newState = reducer(undefined, {})
    expect(newState).toEqual([])
  })
  it('Sholud return ne state if receiving type', () => {
    const posts = [
      { title: 'Test Title 1' },
      { title: 'Test Title 2' },
      { title: 'Test Title 3' }
    ]
    const newState = reducer(undefined, {
      type: types.GET_POST,
      payload: posts
    })
    expect(newState).toEqual(posts)
  })
})

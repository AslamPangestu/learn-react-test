import moxios from 'moxios'
import { testStore } from '../utils/test'
import PostRedux from '../Post'

describe('Fetch Posts actions', () => {
  beforeEach(() => {
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
  })
  test('Store is updated correctly', () => {
    const expectedState = [
      {
        title: 'Title 1',
        body: 'Text body'
      },
      {
        title: 'Title 2',
        body: 'Text body'
      },
      {
        title: 'Title 3',
        body: 'Text body'
      }
    ]
    const store = testStore()
    moxios.wait(() => {
      const req = moxios.requests.mostRecent()
      req.respondWith({
        status: 200,
        response: expectedState
      })
    })

    return store.dispatch(PostRedux.actions.fetchPosts()).then(() => {
      const newState = store.getState()
      expect(newState.posts).toBe(expectedState)
    })
  })
})

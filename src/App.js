import React from 'react'
import Home from './Home/screens/Home'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <Provider store={store} id-test='rootComponent'>
      <Home />
    </Provider>
  )
}

export default App

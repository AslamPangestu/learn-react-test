import React from 'react'
import Header from './components/Header/'
import Headline from './components/Headline/'
import './app.scss'

function App() {
  return (
    <div className='App'>
      <Header />
      <section className='main'>
        <Headline header='Post' desc='Click the button to render post' />
      </section>
    </div>
  )
}

export default App

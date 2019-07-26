import React from 'react'
import Header from './components/Header/'
import Headline from './components/Headline/'
import './app.scss'

const temp = [
  {
    first_name: 'Joe',
    last_name: 'Doe',
    email: 'joe@mail.com',
    age: 24,
    status: 1
  }
]

function App() {
  return (
    <div className='App'>
      <Header />
      <section className='main'>
        <Headline
          header='Post'
          desc='Click the button to render post'
          tempArray={temp}
        />
      </section>
    </div>
  )
}

export default App

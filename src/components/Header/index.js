import React from 'react'
import './styles.scss'

const Header = props => {
  return (
    <header id-test='headerComponent'>
      <div className='container'>
        <div className='logo'>
          <img
            id-test='logoImage'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
            alt='LOGO'
          />
        </div>
      </div>
    </header>
  )
}

export default Header

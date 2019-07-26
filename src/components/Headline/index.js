import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Headline extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    const { header, desc } = this.props
    if (!header) {
      return null
    }
    return (
      <div id-test='HeadlineComponent'>
        <h1 id-test='header'>{header}</h1>
        <p id-test='desc'>{desc}</p>
      </div>
    )
  }
}

Headline.propTypes = {
  header: PropTypes.string,
  desc: PropTypes.string,
  tempArray: PropTypes.arrayOf(
    PropTypes.shape({
      first_name: PropTypes.string,
      last_name: PropTypes.string,
      age: PropTypes.number,
      email: PropTypes.string,
      status: PropTypes.bool
    })
  )
}

export default Headline

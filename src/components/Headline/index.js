import React, { Component } from 'react'

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
      <div id-test="HeadlineComponent">
        <h1 id-test="header">{header}</h1>
        <p id-test="desc">{desc}</p>
      </div>
    )
  }
}

export default Headline

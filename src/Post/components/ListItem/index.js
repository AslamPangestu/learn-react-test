import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListItem extends Component {
  render() {
    const { title, content } = this.props
    if (!title) {
      return null
    }
    return (
      <div id-test='listItemComponent'>
        <h2 id-test='titleComponent'>{title}</h2>
        <p id-test='contentComponent'>{content}</p>
      </div>
    )
  }
}

ListItem.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
}

export default ListItem

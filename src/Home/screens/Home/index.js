import React, { Component } from 'react'
import Header from '../../../components/Header/'
import Button from '../../../components/Button/'
import Headline from '../../components/Headline/'
import ListItem from '../../../Post/components/ListItem'
import { connect } from 'react-redux'
import PostRedux from '../../../Post/'
import './styles.scss'

const temp = [
  {
    first_name: 'Joe',
    last_name: 'Doe',
    email: 'joe@mail.com',
    age: 24,
    status: false
  }
]

const initialState = {
  hideBtn: false
}

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...initialState
    }
  }

  fetch = () => {
    this.props.getPosts()
    this.hideButton()
  }

  hideButton = () => {
    const { hideBtn } = this.state
    this.setState({
      hideBtn: !hideBtn
    })
  }

  returnValue = num => {
    return num + 1
  }

  render() {
    const { posts } = this.props
    const { hideBtn } = this.state
    const configButton = {
      buttonText: 'Get Posts',
      emitEvent: this.fetch
    }
    return (
      <div className='App' id-test='homeComponent'>
        <Header />
        <section className='main'>
          <Headline
            header='Post'
            desc='Click the button to render post'
            tempArray={temp}
          />
          {!hideBtn && <Button {...configButton} />}
          {/* {posts.length === 0 && <Button {...configButton} />} */}
          {posts.length > 0 && (
            <div>
              {posts.map((item, index) => {
                const { title, body } = item
                const configItem = {
                  title,
                  content: body
                }
                return <ListItem key={index.toString()} {...configItem} />
              })}
            </div>
          )}
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}
const mapDispatchToProps = {
  getPosts: PostRedux.actions.fetchPosts
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

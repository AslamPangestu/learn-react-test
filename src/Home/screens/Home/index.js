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

class Home extends Component {
  // constructor(props) {
  //   super(props)
  // }

  fetch = () => {
    this.props.getPosts()
  }

  render() {
    const { posts } = this.props
    const configButton = {
      buttonText: 'Get Posts',
      emitEvent: this.fetch
    }
    return (
      <div className='App'>
        <Header />
        <section className='main'>
          <Headline
            header='Post'
            desc='Click the button to render post'
            tempArray={temp}
          />
          <Button {...configButton} />
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

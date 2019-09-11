import React from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../actions'

const GetPostButton = ({ getPosts, posts }) => {
  const handleClick = () => {
    getPosts()
  }
  return posts.length < 1 ? (
    <button onClick={handleClick}>Get Posts</button>
  ) : (
    ''
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts,
  }
}

export default connect(
  mapStateToProps,
  { getPosts }
)(GetPostButton)

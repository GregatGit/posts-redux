import React from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../actions'

const GetPostButton = ({ getPosts }) => {
  const handleClick = () => {
    console.log('get posts')
    getPosts()
  }
  return <button onClick={handleClick}>Get Posts</button>
}

export default connect(
  null,
  { getPosts }
)(GetPostButton)

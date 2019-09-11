import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import ScrollToTop from 'react-scroll-up'

import { deletePost } from '../actions'

const Posts = ({ posts = null, deletePost }) => {
  function showPosts(posts) {
    return posts.map(({ id, title, body }) => {
      return (
        <li key={id}>
          <h3>{title}</h3>
          <p>{body}</p>
          <button onClick={() => deletePost(id)}>X</button>
        </li>
      )
    })
  }
  return posts.length < 1 ? (
    <div>
      <h2>No Posts to show</h2>
    </div>
  ) : (
    <Fragment>
      <div>{showPosts(posts)}</div>
      <div>
        <ScrollToTop showUnder={160}>
          <span><h1>▲</h1></span>
        </ScrollToTop>
      </div>
    </Fragment>
  )
}
const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts,
  }
}

export default connect(
  mapStateToProps,
  { deletePost }
)(Posts)

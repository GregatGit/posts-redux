import React from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../actions'

const Posts = ({ posts = null, deletePost }) => {
  
  function showPosts(posts) {
    return posts.map(({id, title, body}) => {
      return <li key={id}>
        <h3>{title}</h3>
        <p>{body}</p>
        <button onClick={() => deletePost(id)}>X</button>
      </li>
    })
  }
  return (
    posts.length < 1 ? 
   
    <div>
      <h2>No Posts to show</h2>
    </div>
   :
  <div>
    {showPosts(posts)}
  </div>
  )
}
const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { deletePost })(Posts)

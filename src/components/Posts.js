import React from 'react'
import { connect } from 'react-redux'

const Posts = ({posts = null}) => {
  
  function showPosts(posts) {
    return posts.map(({id, title, body}) => {
      return <li key={id}>
        <h3>{title}</h3>
        <p>{body}</p>
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

export default connect(mapStateToProps)(Posts)

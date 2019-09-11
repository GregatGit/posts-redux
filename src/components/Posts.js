import React from 'react'

const Posts = ({posts = null}) => {
  return (
    !posts ? 
   
    <div>
      <h2>No Posts to show</h2>
    </div>
   :
  <div>
    here are the post
  </div>
  )
}

export default Posts

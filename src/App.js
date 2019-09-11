import React from 'react'

import About from './components/About'
import GetPostsButton from './components/GetPostButton'
import Posts from './components/Posts'


function App() {
  return (
    <div>
      <h1>Posts</h1>
      <About />
      <GetPostsButton />
      <Posts />
    </div>
  )
}

export default App

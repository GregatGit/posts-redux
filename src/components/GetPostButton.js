import React from 'react'

const GetPostButton = () => {
  const handleClick = () => {
    console.log('get posts')
  }
  return (
    <button onClick={handleClick}>
      Get Posts
    </button>
  )
}

export default GetPostButton

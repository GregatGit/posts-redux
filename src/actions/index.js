import axios from 'axios'

export const POSTS_GET = 'POSTS_GET'

export async function getPosts() {
  let res = await fetch('https://jsonplaceholder.typicode.com/posts')
  let data = await res.json()
  return { type: POSTS_GET, payload: data}

}

// 'https://jsonplaceholder.typicode.com/posts'
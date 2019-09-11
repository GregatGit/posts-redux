export const POSTS_GET = 'POSTS_GET'

export async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  return { type: POSTS_GET, payload: data}

}

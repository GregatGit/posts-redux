export const POSTS_GET = 'POSTS_GET'
export const POST_DELETE = 'POST_DELETE'

export function deletePost(id) {
  return {
    type: POST_DELETE,
    payload: id
  }
}

export async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  return { type: POSTS_GET, payload: data}

}

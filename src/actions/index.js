export const POSTS_GET = 'POSTS_GET'

export function getPosts() {
  const data = fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => console.log(json))

  return {
    type: POSTS_GET,
    payload: data
  }
}
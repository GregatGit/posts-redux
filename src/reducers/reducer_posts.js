import {POSTS_GET, POST_DELETE} from '../actions';

const initialState = [];


export default function reducer_posts(state = initialState, action) {
  console.log('boom')

  switch (action.type) {
    case POSTS_GET:
      return action.payload
      
    case POST_DELETE:
      return state.filter(post => post.id !== action.payload)
  
    default:
      return state
  }
};


  


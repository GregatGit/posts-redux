import {POSTS_GET} from '../actions';

const initialState = [];


export default function reducer_posts(state = initialState, action) {
  console.log('boom')

  switch (action.type) {
    case POSTS_GET:
      return action.payload
      
    
  
    default:
      return state
  }
};


  


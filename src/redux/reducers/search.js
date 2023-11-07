// qua quello della fetch
import { GET_COMPANY_RESULTS, GET_MAIN_SEARCH } from '../actions'
const initialState = {
  content: [],
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MAIN_SEARCH:
      return {
        ...state,
        content: action.payload,
      }
    case GET_COMPANY_RESULTS:
      return {
        ...state.content,
        content: action.payload,
      }
    default:
      return state
  }
}

export default searchReducer

// qua quello della fetch
import { GET_COMPANY_RESULTS, GET_MAIN_SEARCH } from '../actions'
const initialState = {
  jobs: [],
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MAIN_SEARCH:
      return {
        ...state,
        jobs: action.payload,
      }
    case GET_COMPANY_RESULTS:
      return {
        ...state.jobs,
        jobs: action.payload,
      }
    default:
      return state
  }
}

export default searchReducer

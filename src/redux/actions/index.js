export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE'
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE'
export const GET_MAIN_SEARCH = 'GET_MAIN_SEARCH'
export const GET_COMPANY_RESULTS = 'GET_COMPANY_RESULTS'
const baseEndpoint = 'https://strive-benchmark.herokuapp.com/api/jobs?company='

export const removeFromFavouriteAction = (fav) => {
  return {
    type: REMOVE_FROM_FAVOURITE,
    payload: fav,
  }
}

export const addToFavouriteAction = (companyName) => {
  return {
    type: ADD_TO_FAVOURITE,
    payload: companyName,
  }
}

export const removeCompanyFromFavouriteAction = (companyName) => {
  return {
    type: REMOVE_FROM_FAVOURITE,
    payload: companyName,
  }
}

export const getMainSearchAction = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint + query + '&limit=20')
      if (response.ok) {
        const { data } = await response.json()
        dispatch({
          type: GET_MAIN_SEARCH,
          payload: data,
        })
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const getCompanySearchResultsAction = (query) => {
  const baseEndpoint =
    'https://strive-benchmark.herokuapp.com/api/jobs?company='
  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint + query + '&limit=20')
      if (response.ok) {
        let { data } = await response.json()
        dispatch({
          type: GET_COMPANY_RESULTS,
          payload: data,
        })
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE'
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE'
export const GET_MAIN_SEARCH = 'GET_MAIN_SEARCH'
export const GET_COMPANY_RESULTS = 'GET_COMPANY_RESULTS'

export const removeFromFavouriteAction = (fav) => {
  return {
    type: REMOVE_FROM_FAVOURITE,
    payload: fav,
  }
}

export const addToFavouriteAction = (data) => {
  return {
    type: ADD_TO_FAVOURITE,
    payload: data.company_name,
  }
}

export const getMainSearchAction = (params) => {
  const baseEndpoint =
    'https://strive-benchmark.herokuapp.com/api/jobs?company='
  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint + params.companyName)
      if (response.ok) {
        let fetchedMainSearch = await response.json()
        dispatch({
          type: GET_MAIN_SEARCH,
          payload: fetchedMainSearch,
        })
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const getCompanySearchResultsAction = (params) => {
  const baseEndpoint =
    'https://strive-benchmark.herokuapp.com/api/jobs?company='
  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint + params.companyName)
      if (response.ok) {
        let fetchedCompanyResults = await response.json()
        dispatch({
          type: GET_COMPANY_RESULTS,
          payload: fetchedCompanyResults,
        })
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      console.log(error)
    }
  }
}

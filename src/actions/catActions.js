//start by writing the basic function defintion
export const fetchCats = () => {
    //send a dispatch to indicate we're loading (fetching) the cats
    return (dispatch) => {
      dispatch({ type: 'LOADING_CATS'})
      //call fetch(), dispatching the returned data:
      fetch('https://learn-co-curriculum.github.io/cat-api/cats.json').then(response => {
        return response.json()
      }).then(responseJSON => {
          //In this case, we just need the data inside images, so we can pass that directly when calling the second dispatch
        dispatch({ type: 'ADD_CATS', cats: responseJSON.images })
      })
    }
  }
// write and export your action creator function here
// export const fetchCats = () => {
//   fetch()
//   .then(res => res.json())
//   .then(data => {
//     return({
//       type: 'ADD_CATS',
//       payload: data
//     })
//   })
// }

export const fetchCats = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING_CATS" })
    fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
    .then(res => res.json())
    .then(resJSON => {
      dispatch({type: "ADD_CATS", cats: resJSON.images})
    })
  }
}

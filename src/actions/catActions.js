export const loading = () => {
    return {
        type: "LOADING_CATS"
    }
}

export const fetchCats = () => {
    return (dispatch) => {
      dispatch(loading());
      fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
        .then((response) => {
          return response.json();
        })
        .then((responseJSON) => {
          dispatch({ type: 'ADD_CATS', cats: responseJSON.images });
        });
    };
};
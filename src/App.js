import React, { Component } from 'react';
import { fetchCats } from './actions/catActions'
import { connect } from 'react-redux'
import CatList from './CatList'

class App extends Component {

  componentDidMount() {
    this.props.fetchCats()
  }

  isLoading = () => {
    if (this.props.loading === true) {
      return <p>Loading Cats</p>
    }
  }

  render() {
    console.log(this.props.catPics)
    return (
      <div>
        <h1>CatBook</h1>
        <CatList catPics={this.props.catPics}/>
        {this.isLoading()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}
// const mapDispatchToProps = dispatch => {
//   fetchCats: dispatch(fetchCats)
// }

export default connect(mapStateToProps, mapDispatchToProps)(App)
// export default connect(mapStateToProps, { fetchCats })(App)

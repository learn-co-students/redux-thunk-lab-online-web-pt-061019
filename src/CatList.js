// write your CatList component here
import React, { Component } from 'react';

export default class CatList extends Component {
  render() {
    return (
      <div>
        {this.props.catPics.map(img => <img key={img.id} src={img.url} alt={img.source_url} />)}
      </div>
    )
  }

}

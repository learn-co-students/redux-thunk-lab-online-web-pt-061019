import React from 'react';

class CatList extends React.Component {

 

  render() {
    const catImgs = this.props.catPics.map(cat => {
        return <img key={cat.id} src={cat.url} alt={cat.id} />
     })

    return (
      <div>
        {catImgs}
      </div>
    )
  }
}

export default CatList;
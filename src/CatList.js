// write your CatList component here
import React from 'react';

const CatList = (props) => {
  return (
    <div>
      {props.catPics.map(catPic => {
        return <img key={catPic.id} alt="cat" src={catPic.url} />
      })}
    </div>
  );
}

export default CatList;

// write your CatList component here
import React from 'react';

class CatList extends React.Component {
   render() {
       const listCats = this.props.catPics.map(cat => {
           return(
               <img 
               key={cat.id}
               src={cat.url}
               alt={cat.id} />
           )
       })
       return(
           <ul>
               {listCats}
           </ul>
       );
   }
};

export default CatList;
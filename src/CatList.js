// write your CatList component here

import React, { Component } from "react";

export default class CatList extends Component {

    listCats = () => this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id}/>)


    render() {
        return(
            <div>
                {this.listCats()}
            </div>
        )
    }
}
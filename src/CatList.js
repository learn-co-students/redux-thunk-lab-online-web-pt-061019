import React, { Component } from 'react';

class catList extends Component {
    render() {
        return (
            <div>
                {this.props.catPics.map((cat) => (
            <img key={cat.id} src={cat.url} alt={cat.source_url} />
        ))}
        </div>
        )
    }
}

export default catList;
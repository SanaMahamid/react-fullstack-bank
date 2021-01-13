import React, { Component } from 'react';

class Categories extends Component {
    render() {
        const categories = Object.keys(this.props.categories)
        return (
            <div id="categories">
                <div>
                    {categories.map((c,i) => {
                        return <div key={i}>{c} : {this.props.categories[c]}</div>
                    })}
                </div>
            </div>
        );
    }
}

export default Categories;
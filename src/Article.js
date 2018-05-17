import React from 'react';

const Article = function (props) {
    return (
        <div className="card cardContent">
            <img className="card-img-top" src={ props.img } alt={ props.altimg }/>
            <div className="card-body">
                <h5 className="card-title">{ props.title }</h5>
                <p className="card-text">{ props.children }</p>
            </div>
        </div>
    )
};

export default Article;
import React, { Component } from 'react';
import './Vote.css';

class Vote extends Component{

    onVote = (note) => {
        this.props.onNote(note);
    };

    isActive = (position) => {
        return this.props.note >= position ? ' active' : '';
    };

    render() {
        const renderStars = Array.from({ length: this.props.nbStars },  (v, k) => {
            let position = k + 1;
            return <span 
                key={position}
                className={'star' + this.isActive(position)} 
                onClick={ (e) => {this.onVote(position)}}>☆</span>
        });
        return (
            <div className="stars">
                    {renderStars}
            </div>
        )
    };
}

export default Vote;
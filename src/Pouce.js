import React, {Component} from 'react';
import './Pouce.css';

class Pouce extends Component {

    onLike= (likeOrNot) => {
        this.props.updateLike(likeOrNot);
    };

    render() {
        return (
            <div className="content-like-dislike">
                <div onClick={ () => {this.onLike(true)}} className={'pouce-up' + (this.props.like === true ? ' active' : '')}>
                    <i className="fa fa-thumbs-up logo-pouce"></i>
                    <span>{this.props.nbLike}</span>
                </div>
                <div onClick={ () => {this.onLike(false)}} className={'pouce-down' + (this.props.dislike === true ? ' active' : '')}>
                    <i className="fa fa-thumbs-down logo-pouce"></i>
                    <span>{this.props.nbDislike}</span>
                </div>
            </div>
        )
    };

}

export default Pouce; 
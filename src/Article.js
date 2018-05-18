import React, { Component } from "react";
import Vote from "./Vote";
import Pouce from './Pouce';

class Article extends Component {
	
	state = {
		note: 0,
		nbLike: 1501,
		nbDislike: 67,
		like: false,
		dislike: false,
	};

	getNote = (note) => {
		this.setState({note: note});
	};

	getLike = (likeOrNot) => {
		if(likeOrNot){
			if(this.state.like){
				this.setState({nbLike: this.state.nbLike - 1});
			}
			else{
				this.setState({nbLike: this.state.nbLike + 1});
				if(this.state.dislike){
					this.setState({nbDislike: this.state.nbDislike - 1});
					this.setState({dislike: !this.state.dislike });
				}
			}
			this.setState({like: !this.state.like });
		}
		if(!likeOrNot){
			if(this.state.dislike){
				this.setState({nbDislike: this.state.nbDislike - 1});
			}
			else{
				this.setState({nbDislike: this.state.nbDislike + 1});
				if(this.state.like){
					this.setState({nbLike: this.state.nbLike - 1});
					this.setState({like: !this.state.like });
				}
			}
			this.setState({dislike: !this.state.dislike });
		}
	};

  	render() {
    	return (
			<div className="card cardContent">
				<img className="card-img-top" src={this.props.img} alt={this.props.altimg} />
				<div className="card-body">
					<h5 className="card-title">{this.props.title}</h5>
					<p className="card-text">{this.props.children}</p>
					<Vote nbStars="5" note={this.state.note} onNote={this.getNote} />
					<Pouce 
					like={this.state.like} 
					dislike={this.state.dislike} 
					nbLike={this.state.nbLike} 
					nbDislike={this.state.nbDislike} 
					updateLike={this.getLike}/>
				</div>
			</div>
    	);
  	}
}

export default Article;

import React, { Component } from "react";
import Vote from "./Vote";

class Article extends Component {
	
	state = {
		note: 0
	};

	getNote = (note) => {
		this.setState({note: note});
	};

  	render() {
    	return (
			<div className="card cardContent">
				<img className="card-img-top" src={this.props.img} alt={this.props.altimg} />
				<div className="card-body">
					<h5 className="card-title">{this.props.title}</h5>
					<p className="card-text">{this.props.children}</p>
					<Vote nbStars="5" note={this.state.note} onNote={this.getNote} />
				</div>
			</div>
    	);
  	}
}

export default Article;

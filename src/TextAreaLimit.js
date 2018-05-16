import React, { Component } from 'react';

class TextAreaLimit extends Component {
    

    state = {
        text: ''
    };

    render() {
        return (
        <div>
            <textarea			
            className={this.props.classes}
            onChange={(e) => this.setState({text: e.target.value})} 
            style={{ color : this.state.text.length < (this.props.maxlength - 10) ? 'black' : 'red'}} 
            maxLength= {this.props.maxlength } />
            <br/>
            <span>Nombre de caractères : {this.state.text.length}</span>
            <h5>Visualisation : {this.state.text}</h5>
            <p>Lorem</p>
        </div>
        )
    };


}

TextAreaLimit.defaultProps = {
	classes: 'form-control'
}

export default TextAreaLimit;

import React, { Component } from 'react';

class TextAreaLimit extends Component {
    

    state = {
        text: ''
    };

    render() {
        return (
        <div>
            <h2>TextArea Limité</h2>
            <textarea			
            className={this.props.classes}
            onChange={(e) => this.setState({text: e.target.value})} 
            style={{ color : this.state.text.length < (this.props.maxlength - 10) ? 'black' : 'red'}} 
            maxLength= {this.props.maxlength } />
            <br/>
            <span>Nombre de caractères : {this.state.text.length}</span>
            <div class="card bg-light mb-3">
                <div class="card-body">
                    <p class="card-text">{this.state.text}</p>
                </div>
            </div>
        </div>
        )
    };


}

TextAreaLimit.defaultProps = {
	classes: 'form-control'
}

export default TextAreaLimit;

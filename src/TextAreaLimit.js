import React, { Component } from 'react';
import './TextAreaLimit.css'

class TextAreaLimit extends Component {
    

    state = {
        text: '',
        preview: false
    };

    onToggle = () => {
        this.setState({ preview : !this.state.preview})
    };


    renderPreview = () => {
        if (this.state.preview){
            return (
                <div className="card bg-light mb-3 previ show">
                    <div className="card-body">
                        <p 
                        className="card-text"
                        >{this.state.text}</p>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div className="card bg-light previ mb-3">
                    <div className="card-body">
                        <p 
                        className="card-text"
                        >{this.state.text}</p>
                    </div>
                </div>
            )
        }
    }

    changeText = (event) => {
        this.setState({text: event.target.value});
    };


    render() {
        const style = {};
        const length = this.state.text.length;

        if(length > (this.props.maxlength - 10)){
            style.color = 'orangered'
        }
        return (
        <div>
            <h2>Message</h2>
            <div>
                <textarea			
                    className={this.props.classes}
                    onChange={this.changeText} 
                    style={style} 
                    maxLength= {this.props.maxlength } />
            </div>
            <div className="infoTextarea">
                <span>Nombre de caractères : {length}</span>
                <button 
                    onClick={this.onToggle} 
                    type="button" 
                    className="btn btn-secondary btn-sm">Prévisualisation</button>
            </div>
            {this.renderPreview()}
        </div>
        )
    };


}

TextAreaLimit.defaultProps = {
	classes: 'form-control textarea'
}

export default TextAreaLimit;

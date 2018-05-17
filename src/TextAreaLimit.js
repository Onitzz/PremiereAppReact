import React, { Component } from 'react';
import './TextAreaLimit.css'

class TextAreaLimit extends Component {
    

    state = {
        text: '',
        previ: false
    };

    onToggle = () => {
        this.setState({ previ : !this.state.previ})
    };


    renderPrevisualisation = () => {
        if (this.state.previ){
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

    render() {
        return (
        <div>
            <h2>Message</h2>
            <div>
                <textarea			
                className={this.props.classes}
                onChange={(e) => this.setState({text: e.target.value})} 
                style={{ color : this.state.text.length < (this.props.maxlength - 10) ? 'black' : 'red'}} 
                maxLength= {this.props.maxlength } />
            </div>
            <div className="infoTextarea">
                <span>Nombre de caractères : {this.state.text.length}</span>
                <button onClick={this.onToggle} type="button" className="btn btn-secondary btn-sm">Prévisualisation</button>
            </div>
            {this.renderPrevisualisation()}
        </div>
        )
    };


}

TextAreaLimit.defaultProps = {
	classes: 'form-control textarea'
}

export default TextAreaLimit;

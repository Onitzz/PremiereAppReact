import React, { Component } from "react";

class TextEditable extends Component {
  state = {
    editing: false
  };

  onToggle = () => {
    this.setState({ editing: !this.state.editing });
  };

	onSave = (event) => {
		if (event.keyCode === 27){
			this.onToggle();
			return;
		}
		if (event.keyCode === 13){
			const value = event.target.value;
			if(value.trim()){
				this.props.save(value);
			}	
			this.onToggle();
		}
	};

  renderDefault = () => {
    return (
			<div onClick={ this.onToggle }>
			{this.props.children}
			</div>
		)
  };

  renderInputText = () => {
		const element = this.props.children;

    return (
			<input 
			type="text"
			className={this.props.classes}
			defaultValue={element.props.children}
			onBlur={ this.onToggle }
			onKeyUp={ this.onSave }
			autoFocus 
			/>
		)
  };

  render() {
		if (this.state.editing){
			return this.renderInputText();
		}

		return this.renderDefault();
  };
}

TextEditable.defaultProps = {
	classes: 'form-control'
}

export default TextEditable;

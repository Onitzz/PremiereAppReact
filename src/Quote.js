import React, { Component } from 'react';
import axios from 'axios';

class Quote extends Component {

    state = {
        quote: {}
    };

    componentWillMount() {
        this.getQuote();
    };

    getQuote = () => {
        return axios.get('https://api.chucknorris.io/jokes/random').then((response) => {
            this.setState({quote: response.data});
        });
    };

    render() {
        return (
            <div>
                <blockquote>{this.state.quote.value}</blockquote>
                <button onClick={this.getQuote} className="btn btn-success">Refresh</button>
            </div>
        );
    }
}

export default Quote;
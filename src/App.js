import React, { Component } from 'react';
import './App.css';
import Article from './Article';
import TextEditable from './TextEditable';
import TextAreaLimit from './TextAreaLimit';
import Quote from './Quote';


class App extends Component {
	state = {
		title: 'Un titre par default'
	};
	
	save = (text) => {
		this.setState({title : text});
	};

  render() {
    return (
      <div className='container'>
        <h1>Mon composant APP</h1>
        
        <Quote />

				<TextAreaLimit maxlength='140'/>
        <TextEditable classes='form-control' save={ this.save }>
          <h2 className='titleSection'>{this.state.title}</h2>
        </TextEditable>
        <div className='content'>
          <Article
            title='Mon super titre'
            img='https://cinktank.s3-eu-west-1.amazonaws.com/uploads%2F58087e44-ccd3-4a5e-9680-0a5bbbcc45c1%2Frick-et-morty-photo-991798.jpg'
            altimg='logo de reactJs'
          >
            This HTML file is a template. If you open it directly in the browser,
            you will see an empty page. You can add webfonts, meta tags, or
            analytics to this file. The build step will place the bundled scripts
            into the tag. To begin the development, run `npm start` or `yarn
            start`. To create a production bundle, use `npm run build` or `yarn
            build`.
          </Article>
          <Article
            title='Hello React World'
            img='https://www.numerama.com/content/uploads/2017/04/rick-and-morty.jpeg'
            altimg='logo de souris'
          >
            If you already have the Chrome extension installed, it should
            autoupdate within the next week. You can also head to
            chrome://extensions and click “Update extensions now” if you’d like to
            get the new version today. If you installed the devtools beta, please
            remove it and switch back to the version from the store to make sure
            you always get the latest updates and bug fixes.
          </Article>
        </div>
      </div>
    );
  }
}

export default App;

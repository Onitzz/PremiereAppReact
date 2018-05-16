import React, { Component } from "react";
import "./App.css";
import Article from "./Article";
import TextEditable from "./TextEditable";
import TextAreaLimit from "./TextAreaLimit";

class App extends Component {
	state = {
		title: 'Un titre par default'
	};
	
	save = (text) => {
		this.setState({title : text});
	};

  render() {
    return (
      <div className="container">
        <h1>Mon composant APP</h1>
				<TextAreaLimit maxlength="140"/>
        <TextEditable classes="form-control" save={ this.save }>
          <h2>{this.state.title}</h2>
        </TextEditable>

        <Article
          title="Mon super titre"
          img="https://laracasts.com/images/series/circles/do-you-react.png"
          altimg="logo de reactJs"
        >
          This HTML file is a template. If you open it directly in the browser,
          you will see an empty page. You can add webfonts, meta tags, or
          analytics to this file. The build step will place the bundled scripts
          into the tag. To begin the development, run `npm start` or `yarn
          start`. To create a production bundle, use `npm run build` or `yarn
          build`.
        </Article>
        <Article
          title="Hello React World"
          img="https://images.vexels.com/media/users/3/131530/isolated/preview/b99a439d305fdd80fa58d6ecb0f760df-icono-de-c-rculo-de-rat-n-con-sombra-by-vexels.png"
          altimg="logo de souris"
        >
          If you already have the Chrome extension installed, it should
          autoupdate within the next week. You can also head to
          chrome://extensions and click “Update extensions now” if you’d like to
          get the new version today. If you installed the devtools beta, please
          remove it and switch back to the version from the store to make sure
          you always get the latest updates and bug fixes.
        </Article>
      </div>
    );
  }
}

export default App;

require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import ReactDOM from 'react-DOM';


let imageDatas=require('json!../data/imageDatas.json');
let imageData1=imageDatas[1];
//let arr=[1,2,3]

//let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      // <div className="index">
      //   <img src={yeomanImage} alt="Yeoman Generator" />
      //   <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      // </div>
      //<span>nihao</span>
      <span> {imageData1.desc} </span>
      
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

import React, { Component } from 'react';
import './App.css';
import SassComponent from './component/SassComponent';
import CSSModule from './component/CSSModule';
import StyledComponent from './component/StyledComponent';

class App extends Component {
  render() {
    // return <StyledComponent />;
    return <SassComponent />;
    // return <CSSModule />;
  }
}

export default App;

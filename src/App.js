import React, { Component } from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import ContentContainer from './components/MainContent/ContentContainer';
import NavContainer from './components/Nav/NavContainer';

class App extends Component {
  render() {
    return (
      <div className='app-container'>
        <HeaderContainer />
        <ContentContainer />
        <hr/>
        <NavContainer />
      </div>
    );
  }
}

export default App;

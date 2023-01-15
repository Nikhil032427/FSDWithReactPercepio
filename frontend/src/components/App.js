import React, { Component } from 'react';
import User from './User/User';
import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Create User" />
        <h1>HRED-Tracker</h1>
        <Content>
          <User />
        </Content>
        <Footer />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Header from './components/Header';
import Theater from './components/Theater';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div id="content-wrapper">
          <Theater />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

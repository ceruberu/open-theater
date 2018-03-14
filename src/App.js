import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './containers/Home';
import Show from './containers/Show';
import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <Route exact path="/" component={Home}/>
    <Route path="/show" component={Show}/>
    <Footer />
  </div>
)

export default App;

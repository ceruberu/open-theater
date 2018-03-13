import React, { Component } from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './containers/Home';
import Theater from './containers/Theater';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Header />

//         <Footer />
//       </div>
//     );
//   }
// }

const App = () => (
  <div className="App">
    <Header />
    <Route exact path="/" component={Home}/>
    <Route path="/theater" component={Theater}/>
    <Footer />
  </div>
)

export default App;

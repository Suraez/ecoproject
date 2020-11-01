import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Layout from './components/Layout'
// import Calculator from './components/Calculator'
import Calc from './components/Calc';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Layout} />
        <Route path="/calc" component={Calc} />
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Layout from './components/Layout'
import Calculator from './components/Calculator'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Layout} />
        <Route path="/calculator" exact component={Calculator} />
      </Router>
    </div>
  );
}

export default App;

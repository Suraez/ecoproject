import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Layout from './components/Layout'
// import Calculator from './components/Calculator'
import Calculators from './components/Calculators';
import Developer from './Developer';
import Calc from './components/Calc';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Layout} />
        <Route path="/calculators" exact component={Calculators} />
        <Route path="/developer" exact component={Developer} />
        <Route path="/calc" exact component={Calc} />
      </Router>
    </div>
  );
}

export default App;

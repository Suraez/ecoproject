import React from 'react';
import logo from './logo.svg';
import './App.css';

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

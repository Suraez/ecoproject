import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Calculators from './components/Calculators';
import Developer from './Developer';
import Calc from './containers/Calc';
import Header from './components/Header'
import { connect } from 'react-redux';

import { fetchComments, fetchLikes } from './store/actions/comment'

class App extends React.Component {

  componentDidMount() {
      this.props.onFetchLikes();
      this.props.onFetchCommments();
  }
    render () {
      return (
        <div className="App">
          <Router>
            <Switch>
            <Route
              path="/"
              exact
              component={Header}
            />
            <Route path="/calculators" exact component={Calculators} />
            <Route path="/developer" component={Developer} />
            <Route path="/calc/:id"  component={Calc} />
            <Route  render={() => <h1>Oops! Invalid URL</h1>} />
            </Switch>
            </Router>
        </div>
      );
    } 
}

const mapDispatchToprops = dispatch => {
  return {
    onFetchCommments: () => dispatch(fetchComments()),
    onFetchLikes: () => dispatch(fetchLikes())
  }
}

export default connect(null, mapDispatchToprops)(App);

import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Calculators from './components/Calculators';
import Developer from './Developer';
import Calc from './components/Calc';
import Header from './components/Header'
import axios from './axiosConfig'

function App() {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    axios.get('/likes/likes.json')
      .then(res => {
        setLikes(res.data);
      })
      .catch(err => console.log(err))

  },[])
    
    const likeHandler = () => {
      axios.put("/likes.json", {likes: likes+1})
       .then(res => {
              setLikes(prevLikes => prevLikes + 1)
              setIsLiked(true);
      })
       .catch(err => console.log(err))
    }
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route
          path="/"
          exact
          render={(props) => (
            <Header
              {...props}
              totalLikes={likes}
              likeChanged={likeHandler}
              isLiked={isLiked}
              likeHandler={likeHandler}
            />
          )}
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

export default App;

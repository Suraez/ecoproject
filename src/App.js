import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
// import Calculator from './components/Calculator'
import Calculators from './components/Calculators';
import Developer from './Developer';
import Calc from './components/Calc';
import Header from './components/Header'
import axios from './axiosConfig'

function App() {
  const [isLiked, setIsLiked] = useState(false);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [comment, setComment] = useState("")

  const [likes, setLikes] = useState(0);

  useEffect(() => {
    axios.get('/likes/likes.json')
      .then(res => {
        setLikes(res.data);
          console.log(res.data);
      })
      .catch(err => console.log(err))

  },[])
    
    const likeHandler = () => {
      axios.put("/likes.json", {likes: likes+1})
       .then(res => {
              setLikes(likes+1)
              alert("Thanks for the like <3")
              setIsLiked(true);
      })
       .catch(err => console.log(err))
    }

    const submitComment = (e) => {
      e.preventDefault();
      axios.post("/comments.json", {name, email, comment})
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }
  return (
    <div className="App">
      <Router>
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
        <Route path="/developer" exact component={Developer} />
        <Route
          path="/calc"
          exact
          component={Calc}
        />
      </Router>
    </div>
  );
}

export default App;

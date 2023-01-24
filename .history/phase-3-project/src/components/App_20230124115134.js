import React, {useState, useEffect} from 'react';
import { Route } from "react-router-dom";
import Main from './Main';

function App() {
  const baseURL = "http://localhost:9292/";
  
  const [reviews, setReviews] = useState([])
  const [cereals, setCereals] = useState([])
  const [users, setUsers] = useState([])

  // Reviews
  useEffect(() =>{
  fetch(`${baseURL}/reviews`)
  .then(response => response.json())
  .then(setReviews)
  },[])

  // Cereals
  useEffect(() =>{
    fetch(`${baseURL}/cereals`)
    .then(response => response.json())
    .then(setCereals)
    },[reviews])

  // Users
  useEffect(() =>{
    fetch(`${baseURL}/users`)
    .then(response => response.json())
    .then(setUsers)
    },[])

  return (
    <div className="App">
    <Route exact path="/">
      <Main /></Main>

    </Route>

    </div>
  )
}

export default App;

import React, {useState, useEffect} from 'react';
import { Routes, Route } from "react-router-dom";
import Main from './Main';

function App() {
  const baseURL = "http://localhost:9292";
  
  const [reviews, setReviews] = useState([])
  const [cereals, setCereals] = useState([])
  const [users, setUsers] = useState([])

  // Reviews
  useEffect(() =>{
  fetch(`${baseURL}/reviews`)
  .then(resp => resp.json())
  .then(reviews => setReviews(reviews))
  },[])

  // Cereals
  useEffect(() =>{
    fetch(`${baseURL}/cereals`)
    .then(resp => resp.json())
    .then(cereals => setReviews(cereals))
    },[])

  // Users
  useEffect(() =>{
    fetch(`${baseURL}/users`)
    .then(response => response.json())
    .then(setUsers)
    },[])

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main cereals={ cereals }/>} />
      </Routes>
    </div>
  )
}

export default App;

import React, {useState, useEffect} from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import Main from './Main';
import Reviews from './Reviews';
import Reviews from './Reviews';

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
    .then(cereals => setCereals(cereals))
  },[])

  // Users
  useEffect(() =>{
    fetch(`${baseURL}/users`)
    .then(resp => resp.json())
    .then(users => setUsers(users))
  },[])

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<><Main cereals={ cereals }/></>} />
        <Route path="/reviews" element={<><Reviews reviews={ reviews }/></>} />
        <Route path="/new-review" element={<><NewReview /></>} />
      </Routes>
    </div>
  )
}

export default App;

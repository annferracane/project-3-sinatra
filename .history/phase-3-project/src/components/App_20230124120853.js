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
    { cereals.map(cereal => <h2> {cereal.id}</h2>)}
    
    </div>
  )
}

export default App;
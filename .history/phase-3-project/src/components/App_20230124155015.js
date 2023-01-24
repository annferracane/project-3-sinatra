import React, {useState, useEffect} from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import Cereals from './Main';
import Reviews from './Reviews';
import NewReview from './NewReview';
import CerealDetail from './CerealDetail';

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

  function addNewReview(mynewReview){
    setReviews([...reviews, mynewReview])
  }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<><Cereals cereals={ cereals }/></>} />
        <Route path="/reviews" element={<><Reviews reviews={ reviews }/></>} />
        <Route path="/new-review" element={<><NewReview cereals={ cereals } addNewReview={ addNewReview }/></>} />
        <Route path="/new-review/:id" element={<><NewReview cereals={ cereals } addNewReview={ addNewReview }/></>} />
        <Route path="/cereals/:id" element={<><CerealDetail cereal={ cereals }/></>} />
      </Routes>
    </div>
  )
}

export default App;

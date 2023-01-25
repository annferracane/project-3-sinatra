import React, {useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { UserProvider } from "../context/user";
import NavBar from './NavBar';
import Cereals from './Cereals';
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
  },[reviews])

  // Users
  useEffect(() =>{
    fetch(`${baseURL}/users`)
    .then(resp => resp.json())
    .then(users => setUsers(users))
  },[])

  function addNewReview(mynewReview){
    setReviews([...reviews, mynewReview])
  }

  function deleteReview(reviewId){
    console.log("delete review called");
    const newReviews = reviews.filter(review => review.id !== reviewId);
    setReviews(newReviews);
    return 200;
  }

  function performEditReview(){
    console.log("worked");
  }

  function editReview(editedReview){
    const editedReviews = reviews.filter(review => review.id !== editedReview.id);
    const newReviews = [...editedReviews, editedReview];
    setReviews(newReviews);
  }

  return (
    <div className="App">
      <UserProvider>
        <NavBar users={ users }/>
        <Routes>
          <Route path={"/"} element={<><Cereals cereals={ cereals }/></>} />
          <Route path={"/reviews"} element={<><Reviews reviews={ reviews } deleteReview={ deleteReview } editReview={ editReview }/></>} />
          <Route path={"/new-review"} element={<><NewReview cereals={ cereals } performEditReview={ performEditReview } addNewReview={ addNewReview }/></>} />
          <Route path={"/new-review/:id"} element={<><NewReview cereals={ cereals } addNewReview={ addNewReview }/></>} />
          <Route path={"/cereals/:id"} element={<><CerealDetail cereal={ cereals } reviews={ reviews }/></>} />
        </Routes>
      </UserProvider>
    </div>
  )
}

export default App;

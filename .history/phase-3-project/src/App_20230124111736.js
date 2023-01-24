import React, {useState, useEffect} from 'react';

function App() {
  const baseURL = "http://localhost:9292/";
  
  const [reviews, setReviews] = useState([])
  const [cereals, setCereals] = useState([])

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
    },[])

  // Cereals
  useEffect(() =>{
    fetch(`${baseURL}/cereals`)
    .then(response => response.json())
    .then(setCereals)
    },[])



  // Fetch comics for home page
  useEffect(() => {
    fetch(baseURL)
    .then(resp => resp.json())
    .then(jokes => setJokes(jokes))
    .catch(e => console.log(e));
  }, [favorites]);

return (
<div>

</div>
  )
}

export default App;

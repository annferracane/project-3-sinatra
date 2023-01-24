import React, {useState, useEffect} from 'react';

function App() {

const [reviews, setReviews] = useState([])

function genericFetch(str) {

  useEffect(() =>{
    fetch('http://localhost:9292/${ str }' + )
    .then(response => response.json())
    .then(setReviews)
    
    },[])
}

useEffect(() =>{
fetch("http://localhost:9292/reviews")
.then(response => response.json())
.then(setReviews)

},[])

  return (
<div>

</div>
  )
}

export default App;

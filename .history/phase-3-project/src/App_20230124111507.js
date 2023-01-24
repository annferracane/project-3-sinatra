import React, {useState, useEffect} from 'react';

function App() {
  const baseURL = "http://localhost:9292/";
  
  const [reviews, setReviews] = useState([])

  useEffect(() =>{
  fetch("http://localhost:9292/reviews")
  .then(response => response.json())
  .then(setReviews)
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

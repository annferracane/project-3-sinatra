import React, {useState, useEffect} from 'react';

function App() {

const [reviews, setReviews] = useState([])

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

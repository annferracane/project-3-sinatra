import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function NewReview({  }) { 
    
// const [title, setTitle] = useState('');
// const [image, setImage] = useState('');
// const [comment, setComment] = useState('');

const history = useHistory();

function handleSubmit(e) { 
    e.preventDefault();

    // const newDate = new Date();
    // const currentDate = newDate.getDate().toString();
    // const month = newDate.getMonth() + 1;
    // const currentMonth = month.toString();
    // const currentYear = newDate.getFullYear().toString();

    // const newComic = { 
    //     title: title, 
    //     img: image, 
    //     alt: comment,
    //     month: currentMonth,
    //     link: "",
    //     year: currentYear,
    //     news: "",
    //     safe_title: title,
    //     transcript: comment,
    //     alt: comment,
    //     day: currentDate,
    //     favorited: false,
    //     comments: [],
    //     alt: comment 
    // };

    // fetch(`http://localhost:3001/jokes`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newComic),
    // })
    // .then(resp => resp.json())
    // .then(data => {
    //     handleNewComic(data);
    //     history.push(`/comics/${data.id}`);
    // });
  
}

    return ( 
        <div className="container py-4">
            <div className="row align-items-md-stretch">
                <div className="p-5 text-bg-dark rounded-3">
                    <form onSubmit={ /*handleSubmit }>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" className="form-control" id="title-Input" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="url">Image</label>
                            <input type="text" className="form-control" id="image" value={image} onChange={(e) => setImage(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="comments">Comic's Note</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                        </div>
                        <br></br>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form> 
                </div>
            </div>
        </div>
    )
}

export default NewSubmission
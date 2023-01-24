import React, { useState } from 'react';
//import { useHistory } from 'react-router-dom';

function NewReview({ addNewReview }) {
    console.log(addNewReview)
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [comment, setComment] = useState('');
    //const history = useHistory();

    function handleSubmit(e) {

        e.preventDefault();

        const newReview = {
            title: title,
            image: image,
            comment: comment
        }
        fetch(`http://localhost:9292/reviews`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
        })
        .then(resp => resp.json())
        .then(mynewReview => {
            addNewReview(mynewReview);
            //history.push(`/cereals/${mynewReview.id}`);
        });
    }
    return (
        <div className="container py-4">
            <div className="row align-items-md-stretch">
                <div className="p-5 text-bg-dark rounded-3">
                    <form onSubmit={ handleSubmit }>
                        <div className="form-group">
                            <label htmlFor="title">Select Cereal</label>
                            <input type="text" className="form-control" id="title-Input" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="url">Image</label>
                            <input type="text" className="form-control" id="image" value={image} onChange={(e) => setImage(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="comments">Comment</label>
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

export default NewReview
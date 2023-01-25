import React, { useContext, useState } from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../context/user";


function NewReview({ cereals, addNewReview }) {
    const params = useParams();

    const { user, setUser } = useContext(UserContext);

    const [cerealId, setCerealId] = useState(params.id ? params.id : 0);
    const [header, setHeader] = useState('');
    const [comment, setComment] = useState('');
    const [starRating, setStarRating] = useState(0);
    const navigate = useNavigate();

    const cerealArray = cereals.map(cereal => <option key={ cereal.id } value={ `${cereal.id}` }>{ cereal.cereal_name }</option>);

    // Handles submit of new review
    function handleSubmit(e) {

        e.preventDefault();

        const newReview = {
            cereal_id: cerealId,
            header: header,
            comment: comment,
            star_rating: starRating,
            user_id: user.id
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
            navigate(`/cereals/${mynewReview.cereal_id}`);
        })
        .catch(e => console.log(e));
    }

    // Tells user they cannot submit a review unless logged in
    const notLoggedIn = (
        <h4>Please login before submitting a review.</h4>
    )

    // Review form for when user is logged in
    const reviewForm = (
        <form onSubmit={ handleSubmit }>
            <div className="form-group">
                <label htmlFor="url">Cereal</label>
                <select className="form-select" value={ cerealId } onChange={(e) => setCerealId(parseInt(e.target.value))} aria-label="Default select example">
                    <option value="0">Select Cereal to Review</option>
                    { cerealArray }
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="header">Review Header</label>
                <input type="text" className="form-control" id="header" value={header} onChange={(e) => setHeader(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="comments">Review Comment</label>
                <textarea className="form-control" id="comment" rows="3" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="url">How would you rate this cereal?</label>
                <select className="form-select" value={ starRating } onChange={(e) => setStarRating(parseInt(e.target.value))} aria-label="Default select example">
                    <option value="0">Select Rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <br></br>
            <button type="submit" className="btn btn-primary">Submit Review</button>
        </form>
    )

    return (
        <div className="container px-4 py-5" id="featured-3">
            <h2 className="pb-2 border-bottom">Review Cereal</h2>
            <div className="p-5 text-bg-light rounded-3">
                { user ? reviewForm : notLoggedIn }
            </div>
        </div>
    )
}

export default NewReview
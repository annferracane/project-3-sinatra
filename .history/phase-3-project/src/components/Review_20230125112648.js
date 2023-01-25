import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/user";

function Review({ review, deleteReview }) {
    const { user, setUser } = useContext(UserContext);

    const [cerealId, setCerealId] = useState(review.cereal.id);
    const [header, setHeader] = useState(review.header);
    const [comment, setComment] = useState(review.comment);
    const [starRating, setStarRating] = useState(review.star_rating);

    const userIsReviewer = () => {
        if (user) {
            if(user.id === review.user.id) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }

    function deleteHandler() {
        const reviewId = review.id;
        console.log(reviewId);
        fetch(`http://localhost:9292/reviews/${reviewId}`, {
                method: "DELETE",
                headers: {
                    'Content-type': 'application/json'
                }
        })
        .then(resp => console.log(resp))
        .then(data => {
            console.log(data);
            console.log(reviewId);
            deleteReview(reviewId);
        })
        .catch(e => console.log(e));
    }

    function editHandler() {


    }

    const editMode = (
        <h4>Please login before submitting a review.</h4>
    )



    return (
        <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                <img src={ review.cereal.image_url } className='img-fluid' style={{ height: "60px" }} alt={ review.cereal.cereal_name }/>
            </div>
            <p><b>Cereal: </b>{ review.cereal.cereal_name }</p>
            <h3 className="fs-2">{ review.header }</h3>
            <p>{ review.comment }</p>
            <p><b>User Rating: </b>{ review.star_rating }</p>
            <p><b>User: </b>{ review.user.name }</p>
            <div className="gap-2 d-sm-flex">
                <Link className="btn btn-primary" type="button" to={`/new-review/${review.cereal.id}`}>Add Review</Link>
                { userIsReviewer() ? <button className="btn btn-outline-danger" type="button" onClick={ deleteHandler }>Delete</button> : null }
                { userIsReviewer() ? <button className="btn btn-outline-warning" type="button" onClick={ editHandler }>Edit</button> : null }
            </div>
        </div>
    )
}

export default Review;
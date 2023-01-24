import React from "react";
import { Link } from "react-router-dom";

function Review({ review }) {
    return (
        <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                <img src={ review.cereal.image_url } className='img-fluid' style={{ height: "60px" }} alt={ review.cereal.cereal_name }/>
            </div>
            <p><b>Cereal: </b>{ review.cereal.cereal_name }</p>
            <h3 className="fs-2">{ review.header }</h3>
            <p>{ review.comment }</p>
            <Link className="btn btn-primary" type="button" to={`/new-review/`}>Review</Link>
        </div>
    )
}

export default Review;
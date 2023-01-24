import React from "react";

function Review({ review }) {
    return (
        <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                <img src={ review.cereal.image_url } className='img-fluid' style={{ height: "60px" }} alt={ review.cereal.cereal_name }/>
            </div>
            <p><b>{ review.cereal.cereal_name }</p>
            <h3 className="fs-2">{ review.header }</h3>
            <p>{ review.comment }</p>
            <a href="#" className="icon-link d-inline-flex align-items-center">
            Call to action
            <svg className="bi" width="1em" height="1em"><use xlinkHref="#chevron-right"></use></svg>
            </a>
        </div>
    )
}

export default Review;
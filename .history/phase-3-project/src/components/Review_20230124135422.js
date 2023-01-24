import React from "react";

function Review({ review }) {
    return (
        <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                <svg className="bi" width="1em" height="1em"><use xlinkHref="#collection"></use></svg>
                </div>
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
import React from "react";

function Review() {
    return (
        <div className="feature col">
                <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                <svg className="bi" width="1em" height="1em"><use xlinkHref="#collection"></use></svg>
                </div>
                <h3 className="fs-2">Featured title</h3>
                <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                <a href="#" className="icon-link d-inline-flex align-items-center">
                Call to action
                <svg className="bi" width="1em" height="1em"><use xlinkHref="#chevron-right"></use></svg>
                </a>
        </div>
    )
}

export default Review;
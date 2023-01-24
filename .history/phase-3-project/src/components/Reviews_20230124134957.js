import React from "react";

function Reviews({ reviews }) {

    const reviewArray = reviews.map(review => <Review key={ review.id } review= { review }/>)

    return (
        <div className="container px-4 py-5" id="featured-3">
            <h2 className="pb-2 border-bottom">Cereal Reviews</h2>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                
            </div>
        </div>
    )

}

export default Reviews;
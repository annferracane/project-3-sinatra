import React from "react";
import Review from "./Review";

function Reviews({ reviews, deleteReview, editReview, performEditReview }) {

    const reviewArray = reviews.map(review => <Review key={ review.id } review={ review } deleteReview={ deleteReview } editReview={ editReview } />)

    return (
        <div className="container px-4 py-5" id="featured-3">
            <h2 className="pb-2 border-bottom">Reviews</h2>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                { reviewArray }
            </div>
        </div>
    )

}

export default Reviews;
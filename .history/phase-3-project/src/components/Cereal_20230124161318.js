import React from "react";
import { Link } from "react-router-dom";

function Cereal({ cereal }) {

    function averageRating(){
        let avgRating = 0;
        console.log(cereal.reviews.length);
        if (cereal.reviews.length > 0) {
            console.log(sumOfRatings);
            
            cereal.reviews.map(review => sumOfRatings + review.star_rating);
            avgRating = sumOfRatings / cereal.reviews.length;
        } 

        return avgRating;
    }

    return (
        <>
            <div className="p-5 text-bg-light rounded-3">
                <h2>{ cereal.cereal_name }</h2>
                <h5>By: { cereal.brand }</h5>
                <img src={ cereal.image_url } className='img-fluid' style={{ height: "300px" }} alt={ cereal.cereal_name }/>
                <br></br>
                <br></br>
                <p><i>{ cereal.highlights }</i></p>
                <p><b>Star Rating:</b> { averageRating() }</p>
                <div className="gap-2 d-sm-flex">
                    <Link className="btn btn-primary" type="button" to={`/cereals/${cereal.id}`}>See Details</Link>
                    <Link type="button" className="btn btn-info" to={`/new-review/${cereal.id}`}> Review Cereal <span className="badge text-bg-dark">{ cereal.reviews.length }</span> </Link>
                </div>
            </div>
            <br></br>
        </>
    )

}

export default Cereal;
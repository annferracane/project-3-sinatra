import React from "react";
import { Link } from "react-router-dom";

function Cereal({ cereal }) {

    return (
        <>
            <div className="p-5 text-bg-light rounded-3">
                <h2>{ cereal.cereal_name }</h2>
                <h5>By: { cereal.brand }</h5>
                <img src={ cereal.image_url } className='img-fluid' style={{ height: "300px" }} alt={ cereal.cereal_name }/>
                <br></br>
                <br></br>
                <p><i>{ cereal.highlights }</i></p>
                <p><b>Number of Reviews:</b> { cereal.number_of_reviews }</p>
                <p><b>Star Rating:</b> { }</p>
                <div className="gap-2 d-sm-flex">
                    <Link className="btn btn-primary" type="button" to={`/cereals/${cereal.id}`}>See Details</Link>
                    <Link type="button" className="btn btn-info" to={`/revi/${cereal.id}`}> Reviews <span className="badge text-bg-dark">{ cereal.reviews.length }</span> </Link>
                </div>
            </div>
            <br></br>
        </>
    )

}

export default Cereal;
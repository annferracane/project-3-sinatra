import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Reviews from './Reviews';

function CerealDetail({ reviews }) {
    const [cereal, setCereal] = useState(null);
    const params = useParams();
    const id = params.id;

    // Fetch Cereal
    useEffect(() => {
        fetch(`http://localhost:9292/cereals/${id}`)
        .then(resp => resp.json())
        .then(cereal => setCereal(cereal))
        .catch(e => console.log(e));
    }, [id, reviews]);

     // Show loading if cereal is null
     if(!cereal) { return <h2>Loading...</h2> }

    return (
        <>
         <div className="container py-4">
                <div className="row align-items-md-stretch">
                    <div className="p-5 text-bg-light rounded-3">
                        <h2>{ cereal.cereal_name }</h2>
                        <h5>By: { cereal.brand }</h5>
                        <p><i>{ cereal.highlights }</i></p>
                        <img src={ cereal.image_url } className='img-fluid' style={{ height: "300px" }} alt={ cereal.cereal_name }/>
                        <Reviews reviews={ cereal.reviews } eviews={ reviews } deleteReview={ deleteReview } editReview={ editReview }/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CerealDetail;
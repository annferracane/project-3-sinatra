import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CerealDetail() {
    const [cereal, setCereal] = useState(null);
    //const [newComment, setNewComment] = useState("");
    const params = useParams();
    const id = params.id;

    // Fetch Cereal
    useEffect(() => {
        fetch(`http://localhost:9292/cereals/${id}`)
        .then(resp => resp.json())
        .then(cereal => setCereal(cereal))
        .catch(e => console.log(e));
    }, [id]);

     // Show loading if cereal is null
     if(!cereal) { return <h2>Loading...</h2> }

    return (
        <>
         <div className="container py-4">
                <div className="row align-items-md-stretch">
                    <div className="p-5 text-bg-dark rounded-3">
                        <img src={ cereal.image_url } className='img-fluid' alt={ cereal.cereal_name }/>
                        <br></br>
                        <br></br>
                        <p><b>Comic's Note:</b></p>
                        <br></br>
                        <br></br>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CerealDetail;
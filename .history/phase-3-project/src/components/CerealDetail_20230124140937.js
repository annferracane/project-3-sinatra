import React, { useEffect, useState } from "react";

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
     if(!joke) { return <h2>Loading...</h2> }

    return (
        <>

        </>
    )
}

export default CerealDetail;
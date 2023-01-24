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
        .then(joke => setJoke(joke))
        .catch(e => console.log(e));
    }, [id]);

    return (
        <>

        </>
    )
}

export default CerealDetail;
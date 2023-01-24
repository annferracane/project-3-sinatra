import React, { useEffect, useState } from "react";

function CerealDetail() {
    const [cereal, setCereal] = useState(null);
    const [newComment, setNewComment] = useState("");
    const params = useParams();
    const id = params.id;

    return (
        <>

        </>
    )
}

export default CerealDetail;
import React, { useEffect, useState, useRef } from "react";

function CerealDetail() {
    const [cereal, setCereal] = useState(null);
    const [newComment, setNewComment] = useState("");
    const params = useParams();
    const id = params.id;
    const maxCommentID = useRef(0);

    return (
        <>

        </>
    )
}

export default CerealDetail;
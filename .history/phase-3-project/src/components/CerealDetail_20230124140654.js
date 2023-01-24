import React from 'react';

function CerealDetail({ cereal }) {
    const [joke, setJoke] = useState(null);
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
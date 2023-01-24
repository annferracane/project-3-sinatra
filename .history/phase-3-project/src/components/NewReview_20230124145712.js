import React, { useState } from 'react';
//import { useHistory } from 'react-router-dom';

function NewReview({ cereals, addNewReview }) {
    console.log(addNewReview)
    const [cerealId, setCerealId] = useState(3);
    const [cerealName, setCerealName] = useState('');
    const [header, setHeader] = useState('');
    const [comment, setComment] = useState('');
    const [starRating, setStarRating] = useState('');
    //const history = useHistory();

    const cerealArray = cereals.map(cereal => <option key={ cereal.id } value={ cereal.id }>{ cereal.name }</option>/>)

    function handleSubmit(e) {

        e.preventDefault();

        const newReview = {
            cereal_id: cerealId,
            header: header,
            comment: comment,
            star_rating: starRating,
            user_id: 1
        }

        fetch(`http://localhost:9292/reviews`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
        })
        .then(resp => resp.json())
        .then(mynewReview => {
            addNewReview(mynewReview);
            //history.push(`/cereals/${mynewReview.id}`);
        });
    }

    return (
        <div className="container py-4">
            <div className="row align-items-md-stretch">
                <div className="p-5 text-bg-dark rounded-3">
                    <form onSubmit={ handleSubmit }>
                        <div className="form-group">
                            <select className="form-select" value={ cerealId } onChange={(e) => setCerealId(e.target.value)} aria-label="Default select example">
                                <option selected>Select Cereal to Review</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="url">Review Header</label>
                            <input type="text" className="form-control" id="image" value={header} onChange={(e) => setHeader(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="comments">Review Comment</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                        </div>
                        <br></br>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewReview
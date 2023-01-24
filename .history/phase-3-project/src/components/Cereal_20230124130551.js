import React from "react";

function Cereal({ cereal }) {

    return (
        <>
            <div className="p-5 text-bg-light rounded-3">
                <h2>{ cereal.cereal_name }</h2>
                <h5>By: { cereal.brand }</h5>
                <img src={ cereal.image_url } className='img-fluid' style={{ height: "300px" }} alt={ cereal.cereal_name }/>
                <br></br>
                <p>By: { cereal.brand }</p>
                <br></br>
                <p><b>Star Rating:</b> { }</p>
                {/*}
                <div className="gap-2 d-sm-flex">
                    {isFavorited ? <button className="btn btn-warning" type="button" onClick={ clickHandler }>Unfavorite</button> : <button className="btn btn-danger" type="button" onClick={ clickHandler }>Favorite</button>}
                    <Link className="btn btn-primary" type="button" to={`/comics/${joke.id}`}>See Details</Link>
                    <Link type="button" className="btn btn-info" to={`/comics/${joke.id}`}> Comments <span className="badge text-bg-dark">{ joke.comments.length }</span> </Link>
                </div>
                */}
            </div>
            <br></br>
        </>
    )

}

export default Cereal;
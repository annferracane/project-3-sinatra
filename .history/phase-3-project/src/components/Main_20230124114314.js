import React from "react";

function Main() {
    return (
        <div className="container py-4">
            <div className="row align-items-md-stretch">
                <JokeList jokes={ jokes } favoriteJoke={ favoriteJoke } unfavoriteJoke={ unfavoriteJoke }/>   
            </div>
        </div>
    )
}

export default Main;
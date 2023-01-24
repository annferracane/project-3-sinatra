import React from "react";
import Cereals from "./Cereals";

function Main({ cereals }) {
    return (
        <div className="container py-4">
            <div className="row align-items-md-stretch">
                { cereals.map(cereal => <h2> {cereal.cereal_name}</h2>)}
                
            </div>
        </div>
    )
}

export default Main;
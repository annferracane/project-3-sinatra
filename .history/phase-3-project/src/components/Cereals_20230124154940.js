import React from "react";
import Cereal from "./Cereal";


function Cereals({ cereals }) {
    const cerealArray = cereals.map(cereal => <Cereal key={ cereal.id } cereal= { cereal }/>)

    return (
        <div className="container py-4">
            <div className="row align-items-md-stretch">
                <div className="col">
                    { cerealArray }
                </div>
            </div>
        </div>
        
    )

}

export default Cereals;
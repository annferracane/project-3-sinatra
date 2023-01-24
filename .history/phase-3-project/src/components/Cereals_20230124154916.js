import React from "react";
import Cereal from "./Cereal";


function Cereals({ cereals }) {
    const cerealArray = cereals.map(cereal => <Cereal key={ cereal.id } cereal= { cereal }/>)

    return (
        <div className="container py-4">
            <div className="row align-items-md-stretch">
                <Cereals cereals={ cereals }/>
            </div>
        </div>
        <div className="col">
            { cerealArray }
        </div>
    )

}

export default Cereals;
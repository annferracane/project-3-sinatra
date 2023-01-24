import React from "react";
import Cereal from "./Cereal";


function Cereals({ cereals }) {
    const cerealArray = cereals.map(cereal => <Cereal key={ cereal.id }/>)

    return (
        <div className="col">
            { cerealArray }
        </div>
    )

}

export default Cereals;
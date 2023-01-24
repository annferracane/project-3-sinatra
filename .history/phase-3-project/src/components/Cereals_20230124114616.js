import React from "react";
import Cereal from "./Cereal";


function Cereals({cereals}) {
    const ceralArray = cereals.map(cereal => <Cereal key={ cereal.id }/>)

    return (
        <div className="col">
            { ceralArray }
        </div>
    )

}

export default Cereals;
import React from "react";
import Cereals from "./Cereals";

function Main() {
    return (
        <div className="container py-4">
            <div className="row align-items-md-stretch">
                <Cereals cereals={ cereals }/>
            </div>
        </div>
    )
}

export default Main;
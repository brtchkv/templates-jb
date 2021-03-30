import React from "react";
import "./styles/stubs.css"

function Loading(props) {
    return (
        <div className="mainbox">
            <i className="far pi pi-spinner fa-spin stub-spinner" style={{"fontSize": "5em"}}/>
        </div>
    );
}

export default Loading;

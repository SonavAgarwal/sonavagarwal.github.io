import React from "react";

function BarTitle(props) {
    return (
        <div style={{ display: "inline-block" }}>
            <h2 style={{ minWidth: "100vw" }}>{props.children}</h2>
        </div>
    );
}

export default BarTitle;

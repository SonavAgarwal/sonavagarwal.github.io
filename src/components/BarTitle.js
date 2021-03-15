import React from "react"

function BarTitle(props) {
    return (
        <h2 style={{ minWidth: "100vw", paddingLeft: "5vw" }}>
            {props.children}
        </h2>
    )
}

export default BarTitle

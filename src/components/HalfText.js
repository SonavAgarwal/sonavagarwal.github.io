import React from "react"

function HalfText(props) {
    return (
        <div
            style={{
                flex: props.flexSize,
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <div
                style={{
                    height: "80vh",
                    // overflow: "scroll",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <div style={{ width: "100%" }}>
                    <h2 style={{ marginBottom: "5vh" }}>{props.title}</h2>
                </div>
                <div style={{ flex: 1, width: "100%", overflow: "scroll" }}>
                    <p style={{ width: "100%" }}>{props.children}</p>
                </div>
            </div>
        </div>
    )
}

export default HalfText

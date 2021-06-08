import React from "react";
import { useMediaQuery } from "../hooks/UseMediaQuery";

function HalfText(props) {
    const isMobile = useMediaQuery("(max-aspect-ratio: 1/1)");
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
                    height: isMobile ? "auto" : "80vh",
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
    );
}

export default HalfText;

import React from "react";
import { useMediaQuery } from "../hooks/UseMediaQuery";

function Section(props) {
    const isMobile = useMediaQuery("(max-aspect-ratio: 1/1)");
    return (
        <>
            <a
                style={{
                    width: 0,
                    height: 0,
                }}
                name={props.anchor}
            ></a>
            <div
                style={{
                    width: "100vw",
                    height:
                        props.fixedHeight === false || isMobile
                            ? "auto"
                            : "100vh",
                    display: props.flex === false ? "block" : "flex",
                    flexDirection: isMobile ? "column" : "row",
                    flexWrap: isMobile ? null : "wrap",
                    gap: "5vw",
                    // paddingLeft: "4vw",
                    // paddingRight: "4vw",
                    padding: "5vw",
                    boxSizing: "border-box",
                }}
                id={"section-" + props.sectionId}
            >
                {props.children}
            </div>
        </>
    );
}

export default Section;

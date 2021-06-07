import React from "react";

function Section(props) {
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
                    height: props.fixedHeight === false ? "auto" : "100vh",
                    display: props.flex === false ? "block" : "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
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

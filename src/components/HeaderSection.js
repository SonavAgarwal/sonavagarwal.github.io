import React from "react"
import HeaderBarOption from "./HeaderBarOption"

function HeaderSection(props) {
    return (
        <div
            className={"section"}
            style={{ display: "flex", flexDirection: "column" }}
        >
            <div style={{ flex: 1 }}>
                <div
                    style={{
                        height: "4vw",
                        display: "flex",
                        flexDirection: "row",
                    }}
                >
                    <HeaderBarOption>Hey</HeaderBarOption>
                    <HeaderBarOption>Hey</HeaderBarOption>
                    <HeaderBarOption>Hey</HeaderBarOption>
                    <HeaderBarOption>Hey</HeaderBarOption>
                </div>
            </div>
            <h1 style={{ textAlign: "center" }}>Sonav Agarwal</h1>
            <div style={{ flex: 1 }}></div>
        </div>
    )
}

export default HeaderSection

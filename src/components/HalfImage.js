import React from "react"
import Pressable from "./Pressable"

function HalfImage(props) {
    const images = require.context("../assets", true)

    return (
        <div
            style={{
                flex: props.flexSize,
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
            }}
        >
            <Pressable style={{ width: "100%" }}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        height: "80vh",
                        // backgroundColor: "black",
                        background: `url("${props.imageSource}")`,
                        overflow: "hidden",
                        backgroundSize: "cover",
                        backgroundPosition: "center",

                        // background: `url("${props.imageSource}")`,
                    }}
                    data-sal="slide-right"
                    data-sal-delay="0"
                    data-sal-easing="ease"
                >
                    {/* <img
                        src={images(props.imageSource)}
                        className="halfImage"
                    /> */}
                </div>
            </Pressable>
        </div>
    )
}

export default HalfImage

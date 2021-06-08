import React from "react";
import { useMediaQuery } from "../hooks/UseMediaQuery";
import Pressable from "./Pressable";

function HalfImage(props) {
    const isMobile = useMediaQuery("(max-aspect-ratio: 1/1)");
    const images = require.context("../assets", true);

    return (
        <div
            style={{
                flex: props.flexSize,
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                // width: "100vw",
                // height: "100vw",
            }}
        >
            <Pressable style={{ width: "100%" }}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: isMobile ? "90vw" : "100%",
                        height: isMobile ? "40vh" : "80vh",
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
    );
}

export default HalfImage;

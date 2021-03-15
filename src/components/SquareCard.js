import React, { useRef, useState } from "react"
import Pressable from "./Pressable"

function SquareCard(props) {
    const [opened, setOpened] = useState(false)

    const selfRef = useRef(null)

    // const scrollAnchor = null
    // (
    // <div
    //     ref={selfRef}
    //     style={{
    //         position: "absolute",
    //         left: 0,
    //         top: "-5vw",
    //         zIndex: -10,
    //         height: "100vw",
    //     }}
    // ></div>
    // )

    function toggleOpened() {
        setOpened(!opened)
        // if ()
        setTimeout(() => {
            selfRef.current.scrollIntoView()
        }, 100)
    }
    if (opened) {
        return (
            <div
                style={{
                    flex: 4,
                    float: "left",
                    minWidth: "80vw",
                    position: "relative",
                    order: 1, //-1
                }}
                className="squareCard"
                // ref={selfRef}
            >
                <div
                    ref={selfRef}
                    style={{
                        position: "absolute",
                        left: 0,
                        top: "-5vw",
                        zIndex: -10,
                        height: "100vw",
                    }}
                ></div>
                <Pressable
                    style={{
                        zIndex: 6,
                        position: "absolute",
                        top: 0,
                        right: 0,
                    }}
                    // link={props.link}
                    startHovered={false}
                    onPress={toggleOpened}
                >
                    <div
                        style={{
                            fontWeight: "bold",
                            aspectRatio: "1 / 1",
                            width: "5vw",
                            // top: 0,
                            // left: 0,
                            // lineHeight: "auto",
                            backgroundColor: "var(--lightGray)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            zIndex: 6,
                            // overflow: "scroll",
                            // boxShadow: "5px 5px 5px black",
                        }}
                    >
                        <h1
                            style={{
                                // width: "100%",
                                // height: "100%",
                                textAlign: "center",
                                fontSize: "3vw",
                                // flex: 1,
                                color: "black",
                                userSelect: "none",
                            }}
                        >
                            X
                        </h1>
                    </div>
                </Pressable>
                <div
                    style={{
                        backgroundColor: "var(--lightGray)",
                        width: opened ? "auto" : "100%",
                        height: opened ? "100%" : "auto",
                    }}
                    // className="squareCard"
                >
                    <div
                        style={{
                            width: opened ? "auto" : "100%",
                            height: opened ? "80vh" : "auto",
                            // aspectRatio: "1 / 1",
                            display: "flex",
                            flexDirection: "row",
                            overflow: "hidden",
                        }}
                    >
                        <div
                            style={{
                                width: opened ? "auto" : "100%",
                                height: opened ? "80vh" : "auto",
                                flex: 1,
                                aspectRatio: "1 / 1",
                                // aspectRatio: "4 / 3",
                                background: `url("${props.imageSource}")`,
                                overflow: "hidden",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        ></div>
                        <div
                            style={{
                                flex: 1,
                                display: "flex",
                                flexDirection: "column",
                                padding: "5vw",
                            }}
                        >
                            <h3
                                style={{
                                    padding: "1vw",
                                    // fontSize: "1.5vw",
                                    textAlign: "left",
                                    margin: 0,
                                }}
                            >
                                {props.title}
                            </h3>
                            <div
                                style={{
                                    display: "inline-block",
                                    overflow: "scroll",
                                }}
                            >
                                <p
                                    style={{
                                        padding: "1vw",
                                        // fontSize: "1.5vw",
                                        textAlign: "left",
                                        margin: 0,
                                    }}
                                >
                                    {props.description}
                                </p>

                                <p
                                    style={{
                                        padding: "1vw",
                                        // fontSize: "1.5vw",
                                        textAlign: "left",
                                        margin: 0,
                                    }}
                                >
                                    {props.children}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div
            style={{
                flex: 4,
                float: "left",
                minWidth: "25vw",
                maxWidth: "26vw",
                position: "relative",
                cursor: "pointer",
            }}
            // data-sal="slide-right"
            // data-sal-delay="0"
            // data-sal-easing="ease"
            // className="squareCard"
            // ref={selfRef}
        >
            <div
                ref={selfRef}
                style={{
                    position: "absolute",
                    left: 0,
                    top: "-5vw",
                    zIndex: -10,
                    height: "100vw",
                }}
            ></div>
            <Pressable
                style={{
                    width: "100%",
                    height: "100%",
                }}
                // link={props.link}
                onPress={toggleOpened}
                disabled={opened}
            >
                <div
                    style={{
                        backgroundColor: "var(--lightGray)",
                        width: opened ? "auto" : "100%",
                        height: opened ? "100%" : "auto",
                    }}
                    // className="squareCard"
                >
                    <div
                        style={{
                            width: opened ? "auto" : "100%",
                            height: opened ? "80vh" : "auto",
                            aspectRatio: "1 / 1",
                            display: "flex",
                            flexDirection: "column",
                            overflow: "hidden",
                        }}
                    >
                        <div
                            style={{
                                width: opened ? "auto" : "100%",
                                height: opened ? "80vh" : "auto",
                                flex: 1,
                                // aspectRatio: "4 / 3",
                                background: `url("${props.imageSource}")`,
                                // backgroundColor: "white",
                                overflow: "hidden",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        ></div>
                        <h3
                            style={{
                                padding: "1vw",
                                // paddingBottom: "1vw",
                                fontSize: "1.5vw",
                                textAlign: "left",
                                // fontWeight: 600,
                                // textTransform: "none",
                            }}
                        >
                            {props.title}
                        </h3>
                        <p
                            style={{
                                padding: "1vw",
                                paddingTop: "0",
                                fontSize: "1.5vw",
                                textAlign: "left",
                                // fontWeight: 600,
                                // textTransform: "none",
                            }}
                        >
                            {props.description}
                        </p>
                    </div>
                </div>
            </Pressable>
        </div>
    )
}

export default SquareCard

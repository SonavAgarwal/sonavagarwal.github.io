import React, { useState } from "react"

const jumpHeight = 5 //20
function JumpChar(props) {
    let [mouseDown, setMouseDown] = useState(false)
    function getTranslateDistance() {
        if (props.currentlyHovered && mouseDown) return jumpHeight
        if (props.index == props.currentlyHovered) return jumpHeight + 5
        return 0
        // return Math.round(
        //     props.currentlyHovered
        //     // jumpHeight / Math.abs(props.index - props.currentlyHovered)
        // )
    }

    function get3DShadow() {
        let final = ""
        let n = getTranslateDistance()
        for (let i = 0; i < n; i++) {
            final += `${i / 2}px ${i}px 0px var(--mainYellow)`
            if (n != i + 1) final += ", "
        }
        return final
    }

    return (
        <div>
            <h1
                className="jumpChar"
                style={{
                    textShadow: get3DShadow(),
                    transform: `translate(-${
                        getTranslateDistance() / 2
                    }px, -${getTranslateDistance()}px)`,
                }}
            >
                {props.children}
            </h1>
            <h1
                style={{
                    zIndex: 1000,
                    opacity: 0.001,
                    transform: "translate(0vw, -10vw)",
                    position: "absolute",
                    userSelect: "none",
                }}
                onMouseOver={() => {
                    props.updateHovered(props.index)
                }}
                onMouseLeave={() => {
                    props.updateHovered(-1000)
                }}
                onMouseDown={() => setMouseDown(true)}
                onMouseUp={() => setMouseDown(false)}
            >
                {props.children}
            </h1>
        </div>
    )
    // if (props.text === "v")
    //     return (
    //     )
    // return (
    //     <h1
    //         data-sal="slide-up"
    //         data-sal-delay="300"
    //         data-sal-easing="ease"
    //         className="jumpChar"
    //     >
    //         {props.text}
    //     </h1>
    // )
    // return <div>{/* <h1 style={{ opacity: 0.001 }}>{props.text}</h1> */}</div>
}

export default JumpChar

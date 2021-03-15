import { Link } from "gatsby"
import React, { useEffect, useState } from "react"

const jumpHeight = 10

function Pressable(props) {
    const [pressed, setPressed] = useState(false)
    const [hovered, setHovered] = useState(false)

    function getTranslateDistance() {
        if (props.disabled) return 0
        if (!hovered) return 0
        if (pressed) return Math.round(jumpHeight / 2)
        return jumpHeight
    }

    function get3DShadow() {
        if (props.disabled) return ""
        let final = ""
        let n = getTranslateDistance() + 1
        for (let i = 0; i < n; i++) {
            final += `${i}px ${i}px 0px var(--mainYellow)`
            if (n != i + 1) final += ", "
        }
        return final
    }

    useEffect(
        function () {
            if (props.startHovered === false) setHovered(false)
        },
        [props.startHovered]
    )

    const component = (
        <div
            className={"pressable"}
            // style={[
            //     {
            //         boxShadow: get3DShadow(),
            //         display: "inline-block",
            //         fontSize: 0,
            //         transform: `translate(-${getTranslateDistance()}px, -${getTranslateDistance()}px)`,
            //     },
            //     props.style,
            // ]}
            style={Object.assign(
                {
                    boxShadow: get3DShadow(),
                    display: "inline-block",
                    fontSize: 0,
                    transform: `translate(-${getTranslateDistance()}px, -${getTranslateDistance()}px)`,
                },
                props.style
            )}
            onMouseOver={() => {
                setHovered(true)
            }}
            onMouseLeave={() => {
                setHovered(false)
                setPressed(false)
            }}
            onMouseDown={() => setPressed(true)}
            onMouseUp={() => setPressed(false)}
            onClick={props.onPress}
        >
            {props.children}
        </div>
    )

    if (props.link != undefined) {
        if (props.external === true)
            return (
                <a target="_blank" rel="noreferrer" href={props.link}>
                    {component}
                </a>
            )
        return <Link to={props.link}>{component}</Link>
    }
    return component
}

export default Pressable

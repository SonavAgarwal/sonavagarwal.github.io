import React, { useState } from "react";
import { useMediaQuery } from "../hooks/UseMediaQuery";

const jumpHeight = 2;

function PressableText(props) {
    const isMobile = useMediaQuery("(max-aspect-ratio: 1/1)");

    const [pressed, setPressed] = useState(false);
    const [hovered, setHovered] = useState(false);

    function getTranslateDistance() {
        if (isMobile) return 0;
        if (!hovered) return 0;
        if (pressed) return Math.round(jumpHeight / 2);
        return jumpHeight;
    }

    function get3DShadow() {
        if (isMobile) return "";
        let final = "";
        let n = getTranslateDistance() + 1;
        for (let i = 0; i < n; i++) {
            final += `${i}px ${i}px 0px var(--mainYellow)`;
            if (n != i + 1) final += ", ";
        }
        return final;
    }

    const component = (
        <span
            className="pressable"
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
                    textShadow: get3DShadow(),
                    display: "inline-block",
                    textDecoration: "underline solid black",
                    // fontSize: 0,
                    transform: `translate(-${getTranslateDistance()}px, -${getTranslateDistance()}px)`,
                },
                props.style
            )}
            onMouseOver={() => {
                setHovered(true);
            }}
            onMouseLeave={() => {
                setHovered(false);
            }}
            onMouseDown={() => setPressed(true)}
            onMouseUp={() => setPressed(false)}
        >
            {props.children}
        </span>
    );

    if (props.link !== undefined) {
        if (props.link.charAt(0) === "#") {
            return <a href={props.link}>{component}</a>;
        }
        return (
            <a href={props.link} rel="noreferrer" target="_blank">
                {component}
            </a>
        );
    }
    return component;
}

export default PressableText;

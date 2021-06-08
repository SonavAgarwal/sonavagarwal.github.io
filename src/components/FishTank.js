import React, { useEffect, useRef, useState } from "react";
import Fish from "./Fish";

function FishTank(props) {
    const [fishes, setFishes] = useState([]);
    const [fishCount, setFishCount] = useState(
        Math.round(Math.random() * 3) + 7 //7
        // 1
    );

    // const [mouseX, setMouseX] = useState(0)
    // const [mouseY, setMouseY] = useState(0)

    // const tankRef = useRef(null)

    useEffect(
        function () {
            let fishTemp = [];
            for (let i = 0; i < fishCount; i++) {
                fishTemp.push(<Fish key={i} tankRef={props.tankRef}></Fish>);
            }
            setFishes(fishTemp);
        },
        [props.tankRef]
    );

    // function getFishes(mouseX, mouseY) {
    //     return fishes
    // }

    return (
        <div style={{ display: "inline-block" }}>
            <div
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100vh",
                    backgroundColor: "var(--mainBlue)",
                    zIndex: 5,
                    filter: "blur(0px) brightness(1)",
                    overflowX: "clip",
                    overflowY: "visible",
                }}
                // onMouseDown={function (e) {
                //     setMouseX(e.screenX)
                //     setMouseY(e.screenY)
                // }}
            >
                {fishes}
            </div>
            {/* <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    zIndex: 5,
                    filter: "blur(1px)",
                    overflowX: "clip",
                    overflowY: "visible",
                    background:
                        "linear-gradient(230deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%)",
                }}
            ></div> */}
        </div>
    );
}

export default FishTank;

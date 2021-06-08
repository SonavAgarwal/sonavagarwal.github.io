import React, { useEffect, useState } from "react";
import FishImage from "../assets/Fish.png";
import FishEyeImage from "../assets/FishEye.png";
import FishBody from "../assets/FishBody.png";
import FishTail from "../assets/FishTail.png";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import useInterval from "@use-it/interval";
import useMouse from "@react-hook/mouse-position";
import { useMediaQuery } from "../hooks/UseMediaQuery";

// const moveRate

function Fish(props) {
    const isMobile = useMediaQuery("(max-aspect-ratio: 1/1)");
    // console.log(props.tankRef)
    const x = useMotionValue();
    const y = useMotionValue();

    // console.log(x)

    // const [xState, setXState] = useState(x.get())

    const mouse = useMouse(props.tankRef, { fps: 20 });

    const [xPos, setXPos] = useState(window.innerWidth / 2);
    const [yPos, setYPos] = useState(-100);
    const [flipped, setFlipped] = useState(false);
    const [eyeRotation, setEyeRotation] = useState(0);

    const [moveRate, setMoveRate] = useState(
        Math.round(Math.random() * 10000 + 3000)
    );
    const [flapRate, setFlaprate] = useState(Math.random() * 2 + 1);
    const [hueShift, setHueShift] = useState(Math.round(Math.random() * 360));

    useInterval(function () {
        let newXPos = Math.round(Math.random() * window.innerWidth);
        // console.log(newXPos + " " + xPos)
        if (newXPos > xPos) {
            setFlipped(true);
        } else {
            setFlipped(false);
        }
        setXPos(pos => newXPos);
        setYPos(pos => Math.round(Math.random() * window.innerHeight));
    }, moveRate);

    useInterval(function () {
        let dy = y.get() - mouse.pageY;
        let dx = x.get() - mouse.pageX;
        if (flipped) dx *= -1;

        setEyeRotation(Math.round((Math.atan2(dy, dx) * 180) / Math.PI) - 90);
    }, 50);

    return (
        <motion.div
            // key={xState}
            // animate={{ x: xPos.get(), y: yPos.get() }}
            animate={{ x: xPos, y: yPos }}
            drag={false}
            initial={false}
            style={{
                position: "absolute",
                display: "inline-block",
                // transform: `scale(${scaling})`,
                // scaleX: flipped ? -1 : 1,
                // backgroundColor: "black",
                zIndex: 100,
                x,
                y,
                scale: isMobile ? 0.6 : 1,
            }}
            transition={{
                duration: 5,
                // staggerChildren: 0,
                ease: "easeInOut",
            }}
        >
            <motion.div
                style={{
                    display: "inline-block",
                    // transform: flipped ? "scaleX(-1)" : "scaleX(1)",
                }}
                animate={{ scaleX: flipped ? -1 : 1 }}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                }}
            >
                <motion.div
                    animate={{
                        scale: [0.8, 1],
                        rotateZ: [-5, 5],
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeatType: "mirror",
                        repeat: Infinity,
                        staggerChildren: 1,
                        repeatDelay: Math.random() * 2,
                    }}
                >
                    <motion.div
                        style={{
                            display: "inline-block",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            originX: 0.7,
                        }}
                        animate={{
                            rotateY: [-40, 40, -40],
                            filter: [
                                "brightness(0.7)",
                                "brightness(1)",
                                "brightness(0.7)",
                            ],
                        }}
                        transition={{
                            duration: flapRate,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "mirror",
                        }}
                    >
                        <img
                            src={FishTail}
                            style={{
                                filter: `hue-rotate(${hueShift}deg)`,
                            }}
                            alt="fish tail"
                        />
                    </motion.div>
                    <img
                        style={{
                            zIndex: -10,
                            filter: `hue-rotate(${hueShift}deg)`,
                        }}
                        // src={FishImage}
                        src={FishBody}
                        alt="fish body"
                    />
                    <motion.div
                        style={{
                            display: "inline-block",
                            position: "absolute",
                            top: 0,
                            left: 0,
                        }}
                        animate={{
                            scale: 0.5,
                            rotateZ: eyeRotation,
                        }}
                        transition={{
                            duration: 0,
                        }}
                    >
                        <img src={FishEyeImage} alt="fish eye" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default Fish;

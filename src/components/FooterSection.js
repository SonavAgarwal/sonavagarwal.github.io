import React, { useState } from "react";
import { motion } from "framer-motion";

import WaveImage from "../assets/WaveTop.svg";

// import GithubIcon from "super-tiny-icons/images/svg/github.svg"
import InstagramIcon from "super-tiny-icons/images/svg/instagram.svg";
import LinkedInIcon from "super-tiny-icons/images/svg/linkedin.svg";
import FacebookIcon from "super-tiny-icons/images/svg/facebook.svg";
// import MailIcon from "super-tiny-icons/images/svg/gmail.svg"
import MailIcon from "../assets/EmailIcon.png";
import GithubIcon from "../assets/GitHub-Mark-120px-plus.png";
import Pressable from "./Pressable";
import { useMediaQuery } from "../hooks/UseMediaQuery";
// import logo from "super-tiny-icons/images/svg/github.svg"

const images = require.context("../assets", true);

function FooterSection(props) {
    const isMobile = useMediaQuery("(max-aspect-ratio: 1/1)");
    return (
        <div style={{ display: "inline-block", overflowX: "hidden" }}>
            <a style={{ width: 0, height: 0 }} name={props.anchor}></a>
            <div style={{ position: "relative", height: "auto" }}>
                <WaveSizer></WaveSizer>
                <Wave></Wave>
                <Wave></Wave>
                <Wave></Wave>
                <Wave opacity={1}></Wave>
            </div>
            <div
                style={{
                    height: "30vh",
                    width: "100vw",
                    backgroundColor: "var(--mainBlue)",
                    zIndex: 10,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        flex: 1,
                        display: "flex",
                        width: isMobile ? "80%" : "50%",
                    }}
                >
                    <Icon
                        icon={GithubIcon}
                        link={"https://github.com/SonavAgarwal"}
                    />
                    <Icon
                        icon={LinkedInIcon}
                        link={"https://www.linkedin.com/in/sonavagarwal/"}
                    />
                    <Icon
                        icon={InstagramIcon}
                        link={"https://www.instagram.com/virtuosonav/"}
                    />
                    {/* <Icon
                        icon={FacebookIcon}
                        link={"https://www.facebook.com/sonav.agarwal/"}
                    /> */}
                    <Icon
                        icon={MailIcon}
                        link={"mailto: me@sonavagarwal.com"}
                    />
                </div>
                <div
                    style={{
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                    }}
                >
                    <h3 style={{ color: "white" }}>© Sonav Agarwal 2022</h3>
                    <h3
                        style={{
                            color: "white",
                            fontSize: isMobile ? "3vw" : "1vw",
                            textTransform: "none",
                            fontWeight: "normal",
                            marginTop: "1vw",
                        }}
                    >
                        This site was coded by me using Gatsby.js. (v1.15)
                    </h3>
                </div>
            </div>
        </div>
    );
}

function Icon(props) {
    const isMobile = useMediaQuery("(max-aspect-ratio: 1/1)");
    return (
        <div
            style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Pressable
                style={{ borderRadius: "100%" }}
                link={props.link}
                external={true}
            >
                <div
                    style={{
                        display: "inline-block",
                        // backgroundColor: "white",
                    }}
                >
                    <img
                        src={props.icon}
                        draggable={false}
                        style={{
                            userSelect: "none",
                            width: isMobile ? "8vw" : "3vw",
                            borderRadius: "100%",
                            backgroundColor: "white",
                            border: isMobile
                                ? "3vw solid white"
                                : "1vw solid white",
                        }}
                        alt="social icon"
                    />
                </div>
            </Pressable>
        </div>
    );
}

function Wave(props) {
    const [undulateDuration, setUndulateDuration] = useState(
        Math.round(Math.random() * 4) + 3
    );
    const [offset, setOffset] = useState(Math.round(Math.random() * -40));
    const [xOffset, setXOffset] = useState(
        Math.round(Math.random() * 100 - 50)
    );
    const [opacity, setOpacity] = useState(
        props.opacity !== undefined ? props.opacity : Math.random() * 0.5 + 0.25
    );
    const [rotationRange, setRotationRange] = useState(
        Math.round(Math.random() * 4)
    );

    return (
        <motion.div
            style={{
                position: "absolute",
                userSelect: "none",
                top: 0,
                left: 0,
                display: "inline-block",
                zIndex: -10,
            }}
            initial={{ rotateZ: 0 }}
            animate={{
                x: [-50 + xOffset, 50 + xOffset],
                y: [0, offset],
                rotateZ: [-rotationRange, rotationRange],
                originX: 0.5,
                originY: 0.5,
            }}
            transition={{
                duration: undulateDuration,
                ease: "easeInOut",
                repeatType: "mirror",
                repeat: Infinity,
                staggerChildren: 1,
            }}
        >
            <img
                draggable={false}
                src={WaveImage}
                style={{
                    userSelect: "none",
                    transform: "scale(1.3) translate(0, 5vw)",
                    width: "100vw",
                    opacity: opacity,
                }}
                alt="wave"
            />
        </motion.div>
    );
}

function WaveSizer(props) {
    return (
        <img
            src={WaveImage}
            style={{ transform: "scale(1.3)", opacity: 0.01 }}
        />
    );
}

export default FooterSection;

import React, { useRef, useState } from "react";
import FishTank from "./FishTank";
import HeaderBarOption from "./HeaderBarOption";
import JumpChar from "./JumpChar";

import PressableText from "./PressableText.js";

import Droplets from "../assets/Droplets.svg";

import { motion } from "framer-motion";
const nameArray = [
    "S",
    "o",
    "n",
    "a",
    "v",
    String.fromCharCode(160),
    "A",
    "g",
    "a",
    "r",
    "w",
    "a",
    "l",
];

function HeaderSection(props) {
    const tankRef = useRef(null);

    return (
        <div>
            <div
                className={"section"}
                style={{ display: "flex", flexDirection: "column" }}
            >
                <FishTank tankRef={tankRef} />
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        zIndex: 10,
                        flexDirection: "column",
                    }}
                    ref={tankRef}
                >
                    <div style={{ flex: 1 }}></div>
                    <h1
                        drag="x"
                        style={{
                            padding: "2vw",
                            color: "white",
                            userSelect: "none",
                            marginBottom: "-1vw",
                        }}
                    >
                        Sonav
                        <br />
                        Agarwal
                    </h1>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            width: "30vw",
                        }}
                    ></div>

                    <h3
                        style={{
                            color: "white",
                            paddingLeft: "2vw",
                            paddingBottom: "2vw",
                        }}
                    >
                        <PressableText
                            style={{
                                textDecorationColor: "white",
                                textDecoration: "none",
                            }}
                            link={"#About"}
                        >
                            About
                        </PressableText>{" "}
                        |{" "}
                        <PressableText
                            style={{
                                textDecorationColor: "white",
                                textDecoration: "none",
                            }}
                            link={"#Projects"}
                        >
                            Projects
                        </PressableText>{" "}
                        |{" "}
                        <PressableText
                            style={{
                                textDecorationColor: "white",
                                textDecoration: "none",
                            }}
                            link={"#Contact"}
                        >
                            Contact
                        </PressableText>{" "}
                    </h3>
                </div>
            </div>
            <div
                style={{ display: "block", position: "relative", zIndex: -10 }}
            >
                <img
                    src={Droplets}
                    draggable={false}
                    alt="drops"
                    style={{
                        transform: "scale(1.05)",
                        zIndex: 0,
                        // filter: "brightness(1)",
                        border: "none",
                        userSelect: "none",
                    }}
                />
                {/* <svg
                    viewBox="0 0 802 121"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    strokeLinejoin="round"
                    strokeMiterlimit="2"
                    style={{ transform: "scale(1.03)", zIndex: 0 }}
                >
                    <g transform="matrix(1 0 0 .7354 1170.82 -112.4172)">
                        <path
                            fill="none"
                            d="M-1170.82 153.226h801.132v163.996h-801.132z"
                        />
                        <clipPath id="a">
                            <path d="M-1170.82 153.226h801.132v163.996h-801.132z" />
                        </clipPath>
                        <g clipPath="url(#a)">
                            <path
                                d="M-1213.627 231.88212752c-2.941-19.63646748-15.641-33.74385336-30.377-33.74385336h-219.392v-731.5666092H-77.1v731.5666092h-180.922c-12.079 0-23.058 9.54095688-28.132 24.44643936-7.709 22.6429056-24.568 38.36952252-44.11 38.36952252-19.542 0-36.401-15.72661692-44.109-38.36952252-5.074-14.90548248-16.053-24.44643936-28.132-24.44643936h-10.944c-12.704 0-24.123 10.54145736-28.811 26.59718628-2.882 9.86842332-9.97 16.85217996-18.248 16.85217996-2.682 0-5.241-.72240084-7.567-2.05695-8.733-5.01237576-18.673-4.31465832-26.981 1.892394-8.308 6.20705232-14.07 17.24217768-15.642 29.95248312-2.617 21.15531936-16.184 37.2637062-32.484 37.2637062-18.194 0-32.965-20.08570536-32.965-44.8250544 0-4.155039.412-8.18007876 1.209-11.99284128 2.659-12.71359656.778-26.38820016-5.081-36.9345942-5.859-10.5480396-15.016-16.74850968-24.737-16.74850968h-35.209c-9.822 0-19.064 6.33046932-24.91 17.06281164-5.847 10.73398788-7.607 24.59947644-4.744 37.37560428.599 2.67568056.911 5.51756268.911 8.4581784 0 16.2416772-9.698 29.42919504-21.643 29.42919504-9.144 0-16.969-7.734132-20.131-18.6524226-3.728-12.87157032-11.864-22.43885616-21.77-25.59504024-9.906-3.15782964-20.321.49695912-27.867 9.77627196-2.68 3.29605668-6.239 5.26743756-10.131 5.26743756-8.511 0-15.42-9.3961476-15.42-20.96772552 0-23.28138288-13.88-42.15431052-31-42.15431052h-31.431c-12.237 0-23.329 9.78943644-28.312 24.98618304-4.984 15.19839216-2.927 32.95892124 5.251 45.33846912 3.383 5.11933716 5.411 11.90727216 5.411 19.32874776 0 16.24332276-9.698 29.42919504-21.643 29.42919504-11.843 0-21.483-12.96207612-21.627-29.01615948-.121-13.38333948-4.907-25.8928866-12.897-33.70765104-7.99-7.81476444-18.235-10.0050048-27.603-5.90262372-2.555 1.1189808-5.28 1.70644572-8.106 1.70644572-10.092 0-18.881-7.62552504-23.442-18.85482648-6.908-17.00357148-21.467-25.38605412-35.255-20.2979826-13.787 5.08807152-23.232 22.3302492-22.87 41.74950276l.03 1.60771212c-.182 19.90140264-12.103 35.95877712-26.76 35.95877712-14.771 0-26.762-16.30585404-26.762-36.3915594 0-2.11289904.129-4.18465908.4-6.19388784 1.655-12.30385212-.793-24.971373-6.683-34.57815228-5.89-9.60677928-14.613-15.16218984-23.811-15.16218984h-8.025c-14.736 0-27.436 14.10738588-30.376 33.74385336-2.485 16.59053592-13.295 29.07210852-26.223 29.07210852-12.929 0-23.739-12.4815726-26.223-29.07210852z"
                                fill="#22cce2"
                            />
                        </g>
                    </g>
                </svg> */}
            </div>
        </div>
    );
}

export default HeaderSection;

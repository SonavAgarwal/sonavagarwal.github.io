import React from "react";
import HalfImage from "../components/HalfImage";
import HalfText from "../components/HalfText";
import HeaderSection from "../components/HeaderSection";
import Section from "../components/Section";

import Portrait from "../assets/Portrait2.jpg";
import DebatePortrait from "../assets/Debate Portrait.jpg";
import MinecraftPortrait from "../assets/Minecraft Skin.png";
import ConnectionCircle from "../assets/Connection Circle.png";
import CoinCatchers from "../assets/Coin Catchers.png";
import SnakeGame from "../assets/SnakeGame.png";
import ScheduleLink from "../assets/ScheduleLink.png";
import LonCapaBeautify from "../assets/Lon Capa Beautify.png";
import JavaComponents from "../assets/JavaComponents.png";
import DailyLogSimplifier from "../assets/Daily Log Simplifier.png";
import CakeGame from "../assets/Cake Game.png";
import Hackathons from "../assets/Friendly Reminders.png";
import OldGames from "../assets/RedsRadAdventure.png";
import PressableText from "../components/PressableText";
import SquareCard from "../components/SquareCard";
import BarTitle from "../components/BarTitle";
import FooterSection from "../components/FooterSection";
import { Helmet } from "react-helmet";

const images = require.context("../assets", true);

export default function Home() {
    return (
        <div>
            <Helmet>
                <title>Sonav Agarwal</title>
                <link rel="canonical" href="https://sonavagarwal.com/" />
                <meta
                    name="description"
                    content="Sonav Agarwal's personal website!"
                />
            </Helmet>
            <HeaderSection></HeaderSection>
            <Section anchor={"About"}>
                <HalfImage imageSource={Portrait} flexSize={4}></HalfImage>
                <HalfText title="About Me" flexSize={8}>
                    Hi! I'm Sonav Agarwal, a senior at Mountain View High
                    School in Silicon Valley. My resume is{" "}
                    <PressableText
                        link={
                            "https://drive.google.com/file/d/16hSG8AxpPcxUk6R3GXby9oZa1VWwoNJH/view?usp=sharing"
                        }
                    >
                        here.
                    </PressableText>
                    <br />
                    <br />I love learning, coding, art, swimming, and helping
                    others. I frequently apply my interests in these areas to
                    various{" "}
                    <PressableText link={"#Projects"}>projects</PressableText> I
                    work on. It is a passion of mine to use my computer science
                    and design skills to help others!
                    <br />
                    <br />
                    For example, during distance learning, I noticed that many
                    students were stressed because they had to manage multiple
                    class zoom links, so I created a web app to organize them. I
                    shared the app with my classmates, helping dozens of people.
                </HalfText>
            </Section>
            <Section anchor={"Activities"}>
                <HalfText title="Activities" flexSize={8}>
                    I've competed in <b>Speech and Debate at</b>{" "}
                    <PressableText link={"https://www.mvlasd.club/"}>
                        MVLASD
                    </PressableText>{" "}
                    for 3 years. This year, I qualified to the{" "}
                    <b>Tournament of Champions</b> in Public Forum with a gold
                    and a silver bid. I'm also the PR committee chair in the{" "}
                    <b>club leadership.</b>
                    <br />
                    <br />I am the <b>lead organizer</b> for{" "}
                    <PressableText link={"https://mvhacks.io"}>
                        MVHacks 5.0.
                    </PressableText>{" "}
                    and I am the vice president of the MVHS{" "}
                    <b>Computer Science club.</b>
                    <br />
                    <br />I play for the MVHS sports teams. I started{" "}
                    <b>swimming</b> early on and have played <b>water polo</b>{" "}
                    and swam for the school for three years.
                    <br />
                </HalfText>
                <HalfImage
                    imageSource={DebatePortrait}
                    flexSize={4}
                ></HalfImage>
            </Section>
            <Section anchor={"Story"}>
                <HalfImage
                    imageSource={MinecraftPortrait}
                    flexSize={4}
                ></HalfImage>
                <HalfText title="My Story" flexSize={8}>
                    I started <b>coding</b> in Scratch when I was eight, and
                    have loved it ever since. Now, I've taken CS courses, led CS
                    clubs, and participated in hackathons. I am also a{" "}
                    <b>graphic design</b> enthusiast. Whether it's mocking up an
                    app, creating a flyer, or making a Minecraft skin, I love
                    turning ideas into designs. I have taken multiple classes
                    and I've used my artistic abilities in schoolwork, projects,
                    and as the PR officer for many clubs, I use my creative
                    skills for marketing.
                    <br />
                    <br />
                    In my free time, I love speedrunning Minecraft or playing
                    games with my friends.
                </HalfText>
            </Section>
            <Section flex={true} fixedHeight={false} anchor={"Projects"}>
                <BarTitle>Work / Projects</BarTitle>
                <SquareCard
                    link={"/testing"}
                    imageSource={ConnectionCircle}
                    title={"Connection Circle"}
                    description={
                        "A web app to develop simple yet effective concept maps."
                    }
                >
                    In my AP US History class, we were given the task of
                    creating a map of multiple events and writing connections
                    between the two maps. In order to make the process of
                    creating the map more simple, I created this web app and
                    shared it with my class. <br />
                    <br /> You can try it out{" "}
                    <PressableText
                        link={
                            "https://connection-circle.web.app/circle.html?uid=C4PimUXi6ReXvY0WICOC4xWEU9v2&name=Minecraft%20Demo%20Map"
                        }
                    >
                        here.
                    </PressableText>
                </SquareCard>
                <SquareCard
                    imageSource={CoinCatchers}
                    title={"Coin Catchers 3D"}
                    description={"A game created for my Advanced CS class."}
                >
                    In my CS class in 11th grade, the 1st semester final was to
                    create a game where the player walks around and gathers
                    items. Going above and beyond, I made my project 3D.
                    <br />
                    <br />
                    You can download the code and try it{" "}
                    <PressableText
                        link={
                            "https://github.com/SonavAgarwal/Coin-Catchers-Final-Project"
                        }
                    >
                        here.
                    </PressableText>
                </SquareCard>
                <SquareCard
                    imageSource={SnakeGame}
                    title={"Slink.io"}
                    description={
                        "A multiplayer Java game created for my Advanced CS class."
                    }
                >
                    In my CS class in 11th grade, the 2nd semester final was to
                    create any multiplayer game using Java networking.
                    <br />
                    <br />
                    You can download the code and try it{" "}
                    <PressableText
                        link={"https://github.com/SonavAgarwal/Slink.io"}
                    >
                        here.
                    </PressableText>
                </SquareCard>
                <SquareCard
                    imageSource={ScheduleLink}
                    title={"Schedule Link"}
                    description={
                        "A web app to help MVHS students organize zoom links and homework."
                    }
                >
                    At the beginning of the school year, I recognized that a
                    large challenge for many students, including myself, would
                    be managing the zoom links for 7 different periods. To solve
                    this, I created Schedule Link Organizer, where you can enter
                    your schedule, Canvas links, and etc. I also added Google
                    task integration, so you can record your homework for each
                    class. <br />
                    <br /> I shared the app with my school, and it has helped
                    many people gain control over school. <br />
                    <br /> Unfortunately, it's only open to school students at
                    the moment, but you can view the source{" "}
                    <PressableText
                        link={
                            "https://github.com/SonavAgarwal/ScheduleTaskLinkOrganizer"
                        }
                    >
                        here.
                    </PressableText>
                </SquareCard>
                <SquareCard
                    imageSource={JavaComponents}
                    title={"Java Swing Components"}
                    description={
                        "A web app to help Computer Science students easily make interfaces fo their projects."
                    }
                >
                    In our AP and Advanced CS classes, one of the most tedious parts of any project is creating an interface using Java Swing. To improve this, I made a visual component creator so that students could focus on learning the concepts and code.
                    <br />
                    <br />
                    You can use the project{" "}
                    <PressableText
                        link={
                            "https://sonavagarwal.com/java-swing-component-creator/"
                        }
                    >
                        here.
                    </PressableText>
                </SquareCard>
                <SquareCard
                    imageSource={LonCapaBeautify}
                    title={"Lon Capa Beautify"}
                    description={
                        "An extension to improve the UI of an education program."
                    }
                >
                    When my physics class began using the program LON CAPA,
                    which has a dated interface, I took the opportunity to
                    create an extension that modernized the interface. I also
                    took a feature suggestion to add confetti when you get a
                    question correct.
                    <br />
                    <br />
                    You can see the extension{" "}
                    <PressableText
                        link={
                            "https://chrome.google.com/webstore/detail/lon-capa-beautify/ljfbfbagkfepcadchllbmbiemlpjeldn?hl=en-US"
                        }
                    >
                        here.
                    </PressableText>
                </SquareCard>
                {/* <SquareCard
                    imageSource={DailyLogSimplifier}
                    title={"Java Swing Components"}
                    description={"A web app for using Java Swing."}
                >
                    This web app allows you to easily create a layout for a Java
                    Swing program following the recommended structure from MVHS
                    CS classes.
                    <br />
                    <br />
                    You can see the app{" "}
                    <PressableText
                        link={
                            "https://sonavagarwal.com/java-swing-component-creator//"
                        }
                    >
                        here.
                    </PressableText>
                </SquareCard> */}
                <SquareCard
                    imageSource={DailyLogSimplifier}
                    title={"Daily Log Simplifier"}
                    description={
                        "A program to help students in MVHS CS classes."
                    }
                >
                    While taking AP CS, I noticed that the procedure for
                    recording our work in the class was tedious for both the
                    students and the teacher. Therefore, I started and led a 2
                    year long project in the CS club with around 15 members to
                    create a program that would make the process easier.
                    <br />
                    <br />
                    You can see the in-progress website{" "}
                    <PressableText link={"https://daily-log-creator.web.app/"}>
                        here
                    </PressableText>{" "}
                    or the source code{" "}
                    <PressableText
                        link={
                            "https://github.com/mvhs-apps/daily-logs-simplifier"
                        }
                    >
                        here.
                    </PressableText>
                </SquareCard>
                <SquareCard
                    imageSource={CakeGame}
                    title={"APCS Final Projects"}
                    description={"Two games created for my AP CS class."}
                >
                    The first semester project was to create a top down view
                    shooter. You can view the game Duck Choke{" "}
                    <PressableText
                        link={"https://github.com/SonavAgarwal/Duck-Choke-Game"}
                    >
                        here.
                    </PressableText>
                    <br />
                    <br />
                    The second semester project was to create a top down RPG.
                    You can view the io-game inspired game Make a Cake{" "}
                    <PressableText
                        link={
                            "https://github.com/SonavAgarwal/Make-a-Cake-Game"
                        }
                    >
                        here.
                    </PressableText>
                </SquareCard>
                <SquareCard
                    imageSource={Hackathons}
                    title={"Hackathons"}
                    description={
                        "Submissions to hackathons I have participated in."
                    }
                >
                    <PressableText
                        link={
                            "https://devpost.com/software/friendly-reminder-i12fd7"
                        }
                    >
                        Friendly Reminders,
                    </PressableText>{" "}
                    an app to help people remain social by reminding them to
                    reach out to friends. <br />
                    <br />
                    <PressableText
                        link={"https://devpost.com/software/connected-coaching"}
                    >
                        Connected Coaching,
                    </PressableText>{" "}
                    an app to help athletes and coaches coordinate exercises
                    over long distances. <br />
                    <br />
                </SquareCard>
                <SquareCard
                    imageSource={OldGames}
                    title={"Old Games"}
                    description={
                        "Some games I have created for various purposes."
                    }
                >
                    <PressableText
                        link={
                            "https://reds-rad-adventure.sonavagarwal.repl.co/"
                        }
                    >
                        Reds's Rad Adventure,
                    </PressableText>{" "}
                    a simple Javascript platformer I created for a Repl.it game
                    jam. <br />
                    <br />
                    <PressableText
                        link={"https://scratch.mit.edu/users/tobot/"}
                    >
                        My Scratch account,
                    </PressableText>{" "}
                    which I've used for both creating and teaching. <br />
                    <br />
                </SquareCard>
            </Section>
            <FooterSection anchor={"Contact"}></FooterSection>
        </div>
    );
}

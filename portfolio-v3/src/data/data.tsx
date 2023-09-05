import Instagram from "../assets/icons/instagram-icon.png";
import Github from "../assets/icons/github-icon.png";
import Linkedin from "../assets/icons/linkedin-icon.png";
import Email from "../assets/icons/email-icon.png";
import LAHacks from "../assets/icons/lahacks-icon.png";
import Nova from "../assets/icons/nova-icon.png";
import Poppin from "../assets/icons/poppin-icon.png";
import UCLA from "../assets/icons/ucla-icon.png";
import Minecraft from "../assets/icons/minecraft-icon.png";
import AITA from "../assets/icons/aita-icon-2.png";
import ConnectionCircleIcon from "../assets/icons/connection-circle-icon.png";
import BruinspaceIcon from "../assets/icons/bruinspace-icon.png";
import MeProfilePhoto from "../assets/images/CornerProfilePhoto.png";

import { AccountInfo, ContentInfo } from "./types";
import PoppinWebsite from "../content/projects/poppin-website/PoppinWebsite";
import AITeach from "../content/projects/ai-teaching-assistant/AITeach";
import ConnectionCircle from "../content/projects/connection-circle/ConnectionCircle";
import Bruinspace from "../content/projects/bruinspace/Bruinspace";
import WelcomeContent from "../content/about/welcome/WelcomeContent";
import LaHacks from "../content/about/la-hacks/LaHacks";
import FunActivities from "../content/about/fun-activities/FunActivities";

export const INSTAGRAM_LINK = "https://www.instagram.com/virtuosonav/";
export const EMAIL_LINK = "mailto:me@sonavagarwal.com";
export const GITHUB_LINK = "https://github.com/SonavAgarwal";
export const LINKEDIN_LINK = "https://www.linkedin.com/in/sonava/";

export const SUGGESTED_ACCOUNTS: AccountInfo[] = [
	{
		title: "Github",
		subtitle: "@SonavAgarwal",
		photo: Github,
		link: "https://github.com/SonavAgarwal",
	},
	{
		title: "LinkedIn",
		subtitle: "@sonava",
		photo: Linkedin,
		link: "https://www.linkedin.com/in/sonava/",
	},
	{
		title: "Instagram",
		subtitle: "@virtuosonav",
		photo: Instagram,
		link: "https://www.instagram.com/virtuosonav/",
	},
	{
		title: "Email",
		subtitle: "me@sonavagarwal.com",
		photo: Email,
		link: "mailto:me@sonavagarwal.com",
	},
];

export const FOLLOWED_TOPICS: AccountInfo[] = [
	{
		title: "UCLA",
		subtitle: "Bachelor of Computer Science",
		link: "https://samueli.ucla.edu/", // TODO: Change link
		photo: UCLA,
	},
	{
		title: "Poppin",
		subtitle: "Web Lead / Fullstack",
		link: "https://joinpoppin.com/",
		photo: Poppin,
	},
	{
		title: "LAHacks",
		subtitle: "HackOps Coordinator",
		link: "https://lahacks.com/",
		photo: LAHacks,
	},
	{
		title: "Nova, Tech for Good",
		subtitle: "Developer",
		link: "https://www.novaforgood.org/",
		photo: Nova,
	},
	{
		title: "Minecraft",
		subtitle: "Minecraft lover",
		link: "https://sonavagarwal.com",
		photo: Minecraft,
	},
];

export const ABOUT_ME_CONTENT: ContentInfo[] = [
	{
		id: "welcome",
		title: "Hey! I'm Sonav.",
		description: `I'm a 2nd year Computer Science student at UCLA.\n\nI'm currently working on Poppin, a social media startup that aims to connect people through events`,
		photo: MeProfilePhoto,
		link: "https://sonavagarwal.com",
		sound: "Hello - Adele",

		likes: 0,
		comments: 0,
		shares: 0,

		content: {
			component: () => <WelcomeContent />,
		},
	},
	{
		id: "funthings",
		title: "I'm Interesting",
		description: `I love swimming, traveling, hiking, and looking at the stars.`,
		photo: MeProfilePhoto,
		link: "https://sonavagarwal.com",
		sound: "Slay",

		likes: 0,
		comments: 0,
		shares: 0,

		content: {
			component: () => <FunActivities />,
		},
	},
	{
		id: "lahacks",
		title: "LAHacks 2023",
		description: `I was on the HackOps team for LAHacks 2023, the largest hackathon in the Southern California. \n\nI helped organize the event and MC'd the opening and closing ceremonies!`,
		photo: LAHacks,
		link: "https://lahacks.com/",
		sound: "Vampire - Olivia Rodrigo",

		likes: 0,
		comments: 0,
		shares: 0,

		content: {
			component: () => <LaHacks />,
		},
	},
];

export const PROJECT_CONTENT: ContentInfo[] = [
	{
		id: "poppin",
		title: "Poppin's Website",
		description: `I created the web app for Poppin, a social media startup that aims to connect people through events. \n\nI led the team to build the website from scratch, and implemented key features like event discovery and social networking.`,
		photo: Poppin,
		link: "https://joinpoppin.com/",
		sound: "React, Golang",
		likes: 0,
		comments: 0,
		shares: 0,

		content: {
			component: () => <PoppinWebsite />,
		},
	},
	{
		id: "aita",
		title: "AI Teaching Assistant (AITA)",
		description: `Our team made this in 24 hours for Calhacks 2023, reached top 50.\n\n AITA uses Speechly, GPT, and Wikipedia's API to transcribe and fact check lectures in real time. It also uses HumeAI to help teachers give the best learning experience possible.`,
		photo: AITA,
		link: "https://github.com/sophiasharif/calhacks",
		sound: "React, GPT, Speechly, HumeAI",
		likes: 0,
		comments: 0,
		shares: 0,

		content: {
			component: () => <AITeach />,
		},
	},
	// {
	// 	id: "connectionCircle",
	// 	title: "Connection Circle",
	// 	description: `A web app to develop simple yet effective concept maps. \n\nIn my AP US History class, we were given the task of creating a map of multiple events and writing connections between the two maps. In order to make the process of creating the map more simple, I created this web app and shared it with my class.`,
	// 	photo: ConnectionCircleIcon,
	// 	link: "https://connection-circle.web.app/map/FM8k76VLdwb3C34w2x7qOH0jk923/D2AGhnBxICeSG9FihjC0",
	// 	sound: "React, Firebase",
	// 	likes: 0,
	// 	comments: 0,
	// 	shares: 0,

	// 	content: {
	// 		component: () => <ConnectionCircle />,
	// 	},
	// },
	{
		id: "bruinspace",
		title: "Bruinspace Overseer",
		description: `We designed a Python-based Raspberry Pi flight computer software for our weather balloon mission. We also worked on a machine learning model to accurately predict the payload's descent.`,
		photo: BruinspaceIcon,
		link: "https://bruinspace.com/index",
		sound: "Python, Raspberry Pi",
		likes: 0,
		comments: 0,
		shares: 0,

		content: {
			component: () => <Bruinspace />,
		},
	},
];

export const ALL_CONTENT = [...ABOUT_ME_CONTENT, ...PROJECT_CONTENT];

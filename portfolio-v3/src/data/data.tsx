import Email from "../assets/icons/email-icon.png";
import Github from "../assets/icons/github-icon.png";
import Instagram from "../assets/icons/instagram-icon.png";
import LAHacks from "../assets/icons/lahacks-icon.png";
import Linkedin from "../assets/icons/linkedin-icon.png";
import Minecraft from "../assets/icons/minecraft-icon.png";
import Nova from "../assets/icons/nova-icon.png";
import Poppin from "../assets/icons/poppin-icon.png";
import UCLA from "../assets/icons/ucla-icon.png";
import MeProfilePhoto from "../assets/images/sonav_website_pfp_2.webp";
import Eating from "../content/about/eating/Eating";
import FitCheck from "../content/about/fit-check/FitCheck";

import FunActivities from "../content/about/fun-activities/FunActivities";
import Goodbye from "../content/about/goodbye/Goodbye";
import WelcomeContent from "../content/about/welcome/WelcomeContent";
import CalhacksClaim from "../content/projects/calhacksclaim/CalhacksClaim";
import EmberAlert from "../content/projects/emberalert/EmberAlert";
import PoppinWebsite from "../content/projects/poppin-website/PoppinWebsite";
import { AccountInfo, ContentInfo } from "./types";

export const INSTAGRAM_LINK = "https://www.instagram.com/virtuosonav/";
export const EMAIL_LINK = "mailto:me@sonavagarwal.com";
export const GITHUB_LINK = "https://github.com/SonavAgarwal";
export const LINKEDIN_LINK = "https://www.linkedin.com/in/sonava/";

export const SUGGESTED_ACCOUNTS: AccountInfo[] = [
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
		title: "Github",
		subtitle: "@SonavAgarwal",
		photo: Github,
		link: "https://github.com/SonavAgarwal",
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
		title: "Nova, Tech for Good",
		subtitle: "President",
		link: "https://www.novaforgood.org/",
		photo: Nova,
	},
	{
		title: "Prev @ Poppin",
		subtitle: "Fullstack Developer",
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
		description: `I'm a 3rd year Computer Science student at UCLA.`,
		photo: MeProfilePhoto,
		link: "https://sonavagarwal.com",
		sound: "Orignal Audio",

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
		description: `I love traveling, eating out, and playing pickleball. Most recently, I visited Mexico City!`,
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
		id: "fitcheck",
		title: "Fit Check!",
		description: ``,
		photo: MeProfilePhoto,
		link: "https://sonavagarwal.com",
		sound: "duvet (electric guitar)",

		likes: 0,
		comments: 0,
		shares: 0,

		content: {
			component: () => <FitCheck />,
		},
	},
	{
		id: "eating",
		title: "I like eating",
		description: `I'm always happy to try anything!`,
		photo: MeProfilePhoto,
		link: "https://sonavagarwal.com",
		sound: "Big Back",

		likes: 0,
		comments: 0,
		shares: 0,

		content: {
			component: () => <Eating />,
		},
	},
	// {
	// 	id: "music",
	// 	title: ""
	// 	description: ``,
	// 	photo: MeProfilePhoto,
	// 	link: "https://sonavagarwal.com",
	// 	sound: "Big Back",

	// 	likes: 0,
	// 	comments: 0,
	// 	shares: 0,

	// 	content: {
	// 		component: () => <Eating />,
	// 	},
	// },
	// {
	// 	id: "lahacks",
	// 	title: "LAHacks 2023",
	// 	description: `I was on the HackOps team for LAHacks 2023, the largest hackathon in the Southern California. \n\nI organized the event and MC'd the opening and closing ceremonies for over 1000 attendees!`,
	// 	photo: LAHacks,
	// 	link: "https://lahacks.com/",
	// 	sound: "Vampire - Olivia Rodrigo",

	// 	likes: 0,
	// 	comments: 0,
	// 	shares: 0,

	// 	content: {
	// 		component: () => <LaHacks />,
	// 	},
	// },
];

export const PROJECT_CONTENT: ContentInfo[] = [
	{
		id: "poppin",
		title: "Poppin",
		description: `I created the web and Android app for Poppin, a social media startup that connects people through events. \n\nWe had more features like secure paid ticketing and live chat compared to competitors like Partiful, and the website had over 50,000 users.`,
		photo: Poppin,
		link: "https://joinpoppin.com/",
		sound: "React, Golang, 50,000+ users",
		likes: 0,
		comments: 0,
		shares: 0,

		content: {
			component: () => <PoppinWebsite />,
		},
	},
	{
		id: "emberalert",
		title: "Ember Alert",
		description: `We won 1st place in sustainability and 3 other prizes at HackMIT 2024 for our platform that analyzes satellite images of homes for fire risk.`,
		photo: MeProfilePhoto,
		link: "https://www.youtube.com/watch?v=YQ8jbAAUyys",
		sound: "HackMIT 2024",
		likes: 0,
		comments: 0,
		shares: 0,

		content: {
			component: () => <EmberAlert />,
		},
	},
	{
		id: "calhacksclaim",
		title: "Claim",
		description: `We built an app that lets victims of natural disasters automatically file for insurance claims with pictures and videos of their home. We won $1000 from from Hyperbolic AI!`,
		photo: MeProfilePhoto,
		link: "https://www.youtube.com/watch?v=2fkQlLvGIrQ",
		sound: "CalHacks 2024",
		likes: 0,
		comments: 0,
		shares: 0,

		content: {
			component: () => <CalhacksClaim />,
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
	// {
	// 	id: "bruinspace",
	// 	title: "Bruinspace Weather Balloon",
	// 	description: `We designed a Python-based Raspberry Pi flight computer software for our weather balloon mission. We also worked on a machine learning model to accurately predict the payload's descent.`,
	// 	photo: BruinspaceIcon,
	// 	link: "https://bruinspace.com/index",
	// 	sound: "Python, Raspberry Pi",
	// 	likes: 0,
	// 	comments: 0,
	// 	shares: 0,

	// 	content: {
	// 		component: () => <Bruinspace />,
	// 	},
	// },
	{
		id: "goodbye",
		title: "See ya!",
		description: `Thanks for checking out my website!\nMake sure to leave a #like!`,
		photo: MeProfilePhoto,
		link: "https://sonavagarwal.com",
		sound: "Bye Bye Bye - NSYNC",
		likes: 0,
		comments: 0,
		shares: 0,

		content: {
			component: () => <Goodbye />,
		},
	},
];

export const ALL_CONTENT = [...ABOUT_ME_CONTENT, ...PROJECT_CONTENT];

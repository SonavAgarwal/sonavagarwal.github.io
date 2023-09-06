export interface ContentInfo {
	id: string;

	title: string;
	description: string;
	photo: any;
	link: string;
	sound: string;

	likes: number;
	comments: number;
	shares: number;

	content: Content;
}

export interface Content {
	// react component
	component: React.FC;
}

export interface AccountInfo {
	title: string;
	subtitle: string;
	photo: any;
	link: string;
}

export interface AllInfo {
	[key: string]: {
		likes: number;
	};
}

import { ALL_CONTENT } from "./data";
import { AllInfo } from "./types";

export async function getAllInfo(): Promise<AllInfo> {
	// call getAllInfoPersonalWebsiteContent function
	// let personalWebsiteGetAllInfo = httpsCallable(
	// 	functions,
	// 	"personalWebsiteGetAllInfo"
	// );
	// return personalWebsiteGetAllInfo().then((result: any) => {
	// 	// Read result of the Cloud Function.
	// 	console.log(result.data);
	// });

	// https://personalwebsitegetallinfo-woobdosypa-uc.a.run.app
	let data: AllInfo = await fetch(
		"https://personalwebsitegetallinfo-woobdosypa-uc.a.run.app"
	).then((response) => response.json());

	try {
		let keys = Object.keys(data);
		keys.forEach((key) => {
			// console.log(data[key]);
			ALL_CONTENT.forEach((content) => {
				// console.log(content);
				// console.log(key);
				if (content.id === key) {
					// console.log("match");
					content.likes = data[key]?.likes;
				}
			});
		});
	} catch (e) {
		console.log(e);
	}

	return data;
}

export async function sendLike(id: string) {
	// https://personalwebsitesendlike-woobdosypa-uc.a.run.app
	fetch(
		`https://personalwebsitesendlike-woobdosypa-uc.a.run.app?id=${id}`
	).then((response) => {
		console.log(response);
	});
}

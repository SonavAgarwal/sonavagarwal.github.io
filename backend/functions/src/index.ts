import { Response, https, logger } from "firebase-functions";
import { onRequest } from "firebase-functions/v2/https";
import * as admin from "firebase-admin";
admin.initializeApp();

const permittedContentIds = [
	"welcome",
	"funthings",
	"lahacks",
	"poppin",
	"aita",
	"bruinspace",
	"goodbye",
];

export const personalWebsiteSendLike = onRequest(
	{
		cors: [/http:\/\/localhost:\d+/, /sonavagarwal\.com$/],
		timeoutSeconds: 2,
		minInstances: 0,
		maxInstances: 5,
	},
	async (request: https.Request, response: Response) => {
		const id = request.query.id as string;

		if (!permittedContentIds.includes(id)) {
			response.status(400).send("Invalid ID");
			return;
		}

		logger.info("id: " + id, { structuredData: true });

		try {
			const ref = admin.database().ref(`/personal-website/content/${id}/likes`);
			await ref.transaction((currentLikes) => {
				return (currentLikes || 0) + 1;
			});

			response.status(200).send("Success!");
		} catch (error) {
			logger.error(error, { structuredData: true });
			response.status(500).send(error);
		}
	}
);

export const personalWebsiteGetAllInfo = onRequest(
	{
		cors: [/http:\/\/localhost:\d+/, /sonavagarwal\.com$/],
		timeoutSeconds: 2,
	},
	async (request: https.Request, response: Response) => {
		try {
			const snapshot = await admin
				.database()
				.ref("/personal-website/content")
				.once("value");
			response.send(snapshot.val());
		} catch (error) {
			logger.error(error, { structuredData: true });
			response.status(500).send(error);
		}
	}
);

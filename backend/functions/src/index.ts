import { https, logger } from "firebase-functions";
import { onRequest } from "firebase-functions/v2/https";
import * as admin from "firebase-admin";
admin.initializeApp();

export const personalWebsiteSendLike = onRequest(
	{
		cors: [/http:\/\/localhost:\d+/, /sonavagarwal\.com$/],
	},
	async (request: https.Request, response: any) => {
		const id = request.query.id as string;
		logger.info("id: " + id, { structuredData: true });

		try {
			const ref = admin.database().ref(`/personal-website/content/${id}/likes`);
			await ref.transaction((currentLikes) => {
				return (currentLikes || 0) + 1;
			});

			response.send("Success!");
		} catch (error) {
			logger.error(error, { structuredData: true });
			response.status(500).send(error);
		}
	}
);

export const personalWebsiteGetAllInfo = onRequest(
	{
		cors: [/http:\/\/localhost:\d+/, /sonavagarwal\.com$/],
	},
	async (request: https.Request, response: any) => {
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

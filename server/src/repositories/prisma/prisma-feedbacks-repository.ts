import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository{
	async create({type, comment, screenshot}: FeedbackCreateData) {
		await prisma.feedback.create({
			/* short syntax for
				data:{
					type: type,
					comment: comment,
					screenshot: screenshot
				}
			*/
			data:{
				type,
				comment,
				screenshot
			}
		})
	}
}
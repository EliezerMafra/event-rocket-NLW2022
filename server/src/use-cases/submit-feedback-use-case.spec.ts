import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
	{create: createFeedbackSpy,},
	{sendMail: sendMailSpy}
);

describe('Submite feedback', () => {
	it('should be able to submit a feedback', async ()=> {
		await expect(submitFeedback.execute({
			type: 'BUG',
			comment: 'example comment testing',
			screenshot: 'data:image/png;base64xrdcftvgybuhnih5g4vb2h3n4b32iuv4gyf32ctd32yv4ugb32n4324ugtd324f2',
		})).resolves.not.toThrow();

		expect(createFeedbackSpy).toHaveBeenCalled();
		expect(sendMailSpy).toHaveBeenCalled();

	})
	
	it('should not be able to submit feedback without type', async ()=> {
		await expect(submitFeedback.execute({
			type: '',
			comment: 'example comment testing',
			screenshot: 'data:image/png;base64xrdcftvgybuhnih5g4vb2h3n4b32iuv4gyf32ctd32yv4ugb32n4324ugtd324f2',
		})).rejects.toThrow();

	})
	
	it('should not be able to submit feedback without comment', async ()=> {
		await expect(submitFeedback.execute({
			type: 'BUG',
			comment: '',
			screenshot: 'data:image/png;base64xrdcftvgybuhnih5g4vb2h3n4b32iuv4gyf32ctd32yv4ugb32n4324ugtd324f2',
		})).rejects.toThrow();

	})

	it('should not be able to submit feedback with an invalid screenshot', async ()=> {
		await expect(submitFeedback.execute({
			type: 'BUG',
			comment: 'example comment testing',
			screenshot: 'asdsad',
		})).rejects.toThrow();

	})
})
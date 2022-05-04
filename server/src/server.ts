import express from 'express'
import nodemailer from 'nodemailer'
import { prisma } from './prisma';

const app = express();

app.use(express.json());

const transport = nodemailer.createTransport({
	host: "smtp.mailtrap.io",
	port: 2525,
	auth: {
	  user: "0b7ee4a32f8c35",
	  pass: "88ed76e91a8c9b"
	}
  });

app.post('/feedbacks', async (req, res) => {
	const {type, comment, screenshot} = req.body

	const feedback = await prisma.feedback.create({
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

	await transport.sendMail({
		from:'Equipe Feedget <oi@feedget.com>',
		to: 'Eliezer Mafra <eliezer@feedget.com>',
		subject: 'Teste feedback',
		html: [
			`<div style="font-family: sans-serif; font-size:16px; color: #111;">`,
			`<p> Tipo do Feedback: ${type}</p>`,
			`<p> Comentário: ${comment}</p>`,
			`</div>`
		].join('\n')
	})

	return res.status(201).json({data: feedback})
})

app.listen(3333, () =>{
	console.log('HTTP server running!!!')
})
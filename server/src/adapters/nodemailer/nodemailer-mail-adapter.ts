import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
	host: "smtp.mailtrap.io",
	port: 2525,
	auth: {
	  user: "0b7ee4a32f8c35",
	  pass: "88ed76e91a8c9b"
	}
  });

export class NodemailerMailAdapter implements MailAdapter{
	async sendMail({subject, body}: SendMailData){
		
		await transport.sendMail({ 
			from:'Equipe Feedget <oi@feedget.com>',
			to: 'Eliezer Mafra <eliezer@feedget.com>',
			subject: subject,
			html: body,
		})
	};
}
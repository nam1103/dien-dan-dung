"use server";

import path from "path";
import nodemailer from "nodemailer";
import fs from "fs";
import ejs from "ejs";

const emailBasePath = `${process.cwd()}/components/email-pages`;

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.GOOGLEMAIL_ADDRESS!,
		pass: process.env.GOOGLEMAIL_PASSWORD!,
	},
});

type HTMLPageData =
	| {
			redirectUrl: string;
			contact_id: string;
			contact_email: string | null;
			contact_phoneNumber: string;
			contact_message: string;
			contact_username: string;
			contact_createdAt: string;
	  }
	| {};

export const sendEmail = async ({
	to,
	subject,
	htmlContentPath,
	data,
}: {
	to: string;
	subject: string;
	htmlContentPath: string;
	data: HTMLPageData;
}) => {
	try {
		const emailTemplatePath = path.join(emailBasePath, htmlContentPath);
		const emailTemplate = await fs.promises.readFile(
			emailTemplatePath,
			"utf-8"
		);

		const htmlContent = ejs.render(emailTemplate, data);

		const mailOptions = {
			from: process.env.GMAIL_USER,
			to,
			subject,
			html: htmlContent,
		};

		await transporter.sendMail(mailOptions);
		return 200;
	} catch (error) {
		return 500;
	}
};

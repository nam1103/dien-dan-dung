"use server";

import * as z from "zod";
import { contactSchema } from "./schemas";
import { db } from "./db";
import { revalidatePath } from "next/cache";
import { sendEmail } from "./gmail-service";
import { format } from "date-fns";

export const createContact = async (values: z.infer<typeof contactSchema>) => {
	const result = contactSchema.safeParse(values);

	if (!result.success) {
		return null;
	}

	try {
		const newContact = await db.contact.create({ data: { ...result.data } });

		const users = await db.user.findMany({
			where: { emailedWhenContact: true },
		});

		const sendings = users.map((user) => {
			return sendEmail({
				to: user.email,
				subject: "Một Khách Hàng Nào Đó Đã Tạo Liên Hệ!",
				htmlContentPath: "/new-contact.html",
				data: {
					redirectUrl: `${process.env.NEXT_SITE_URL}/quan-tri-vien/lien-he`,
					contact_id: newContact.id,
					contact_username: newContact.username,
					contact_email: newContact.email,
					contact_phoneNumber: newContact.phoneNumber,
					contact_message: newContact.message,
					contact_createdAt: format(
						newContact.createdAt,
						"yyyy-MM-dd HH:mm:ss"
					),
				},
			});
		});

		await Promise.all(sendings);

		return newContact;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const getContacts = async (
	order: "asc" | "desc" = "asc",
	username: string = ""
) => {
	try {
		const contacts = await db.contact.findMany({
			where: { username: { contains: username } },
			orderBy: {
				createdAt: order,
			},
		});

		return contacts;
	} catch (error) {
		return [];
	}
};

export const deleteAllContacts = async () => {
	try {
		await db.contact.deleteMany({});

		revalidatePath("/quan-tri-vien/lien-he");

		return 200;
	} catch (error) {
		return 500;
	}
};

export const deleteContact = async (id: string) => {
	try {
		const contact = await db.contact.delete({ where: { id } });

		revalidatePath("/quan-tri-vien/lien-he");

		return contact;
	} catch (error) {
		return [];
	}
};

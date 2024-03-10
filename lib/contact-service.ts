"use server";

import * as z from "zod";
import { contactSchema } from "./schemas";
import { db } from "./db";

export const createContact = async (values: z.infer<typeof contactSchema>) => {
	const result = contactSchema.safeParse(values);

	if (!result.success) {
		return null;
	}

	try {
		const newContact = await db.contact.create({ data: { ...values } });
		return newContact;
	} catch (error) {
		console.log(error);
		return null;
	}
};

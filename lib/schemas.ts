import * as z from "zod";

export const contactSchema = z.object({
	username: z.string().min(1, "Vui lòng điền vào đây!"),
	email: z.string().optional(),
	phoneNumber: z.string().refine((val) => /^\d{10}$/g.test(val), {
		message: "Vui lòng điền vào số điện thoại hợp lệ!",
	}),
	message: z.string().min(1, "Vui lòng điền vào đây!"),
});

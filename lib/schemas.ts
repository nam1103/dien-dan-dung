import * as z from "zod";

export const contactSchema = z.object({
	username: z.string().min(1, "Vui lòng điền vào đây!"),
	email: z.string().optional(),
	phoneNumber: z.string().refine((val) => /^\d{10}$/g.test(val), {
		message: "Vui lòng điền vào số điện thoại hợp lệ!",
	}),
	message: z.string().min(1, "Vui lòng điền vào đây!"),
});

export const loginSchema = z.object({
	email: z.string().email("Email không hợp lệ!"),
	password: z.string().min(1, "Mật khẩu không hợp lệ!"),
});

export const registerSchema = z.object({
	email: z.string().email("Invalid email!"),
	password: z
		.string()
		.min(8, "Password must be at least 8 characters")
		.max(50, "Password cannot have more than 50 characters"),
});

export const emailSettingsSchema = z.object({
	emailedWhenContact: z.boolean(),
	emailedWhenComment: z.boolean(),
});

export const changeEmailSchema = z.object({
	email: z.string().email("Email không hợp lệ!"),
});

export const confirmPasswordSchema = z.object({
	password: z.string().min(1, "Mật khẩu không hợp lệ!"),
});

export const changePasswordSchema = z
	.object({
		currentPassword: z.string().min(1, "Mật khẩu không hợp lệ!"),
		newPassword: z
			.string()
			.min(8, "Password must be at least 8 characters")
			.max(50, "Password cannot have more than 50 characters"),
		confirmNewPassword: z.string(),
	})
	.refine((data) => data.newPassword === data.confirmNewPassword, {
		message: "Mật khẩu không trùng khớp",
		path: ["confirmNewPassword"],
	});

export const postSchema = z.object({
	title: z.string().min(1, "Tiều đề bắt buộc!"),
	images: z.object({ url: z.string() }).array(),
	body: z.string().min(1, "Vui lòng nhập nội dung bên trong!"),
	category_id: z.string().optional(),
});

export const commentSchema = z.object({
	username: z.string().min(1, "Vui lòng nhập tên của bạn."),
	phoneNumber: z
		.string()
		.min(1, "Vui lòng điền vào số điện thoại hợp lệ!")
		.refine((val) => /^\d{10}$/g.test(val), {
			message: "Vui lòng điền vào số điện thoại hợp lệ!",
		}),
	body: z.string().min(1, "Vui lòng điền nội dung tin nhắn."),
});

export const categorySchema = z.object({
	title: z.string().min(1, "Tiều đề bắt buộc!"),
});

"use client";

import {
	Form,
	FormField,
	FormItem,
	FormControl,
	FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { createContact } from "@/lib/contact-service";
import { useTransition } from "react";

export const ContactForm = () => {
	const form = useForm<z.infer<typeof contactSchema>>({
		resolver: zodResolver(contactSchema),
		defaultValues: {
			username: "",
			phoneNumber: "",
			email: "",
			message: "",
		},
	});

	const onSubmit = async (values: z.infer<typeof contactSchema>) => {
		const data = await createContact(values);
		console.log(data);
	};

	if (form.formState.isSubmitted) {
		return (
			<div className="bg-green-200 rounded-sm border border-black shadow-md p-2">
				<h1 className="italic font-semibold text-xl">Thành công!</h1>
				<p className="mx-1">
					Cảm ơn đã liên hệ với chúng tôi. Chúng tôi sẽ nhanh chóng liên hệ lại
					với bạn sau.
				</p>
			</div>
		);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									{...field}
									placeholder="Tên của bạn*"
									className="text-lg py-5 font-light rounded-sm focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:shadow-md focus-visible:border-black transition-all"
									autoComplete="off"
									autoCorrect="off"
									type="text"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									{...field}
									placeholder="Email của bạn"
									className="text-lg py-5 font-light rounded-sm focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:shadow-md focus-visible:border-black transition-all"
									autoComplete="off"
									autoCorrect="off"
									type="email"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="phoneNumber"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									{...field}
									placeholder="Số điện thoại của bạn"
									className="text-lg py-5 font-light rounded-sm focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:shadow-md focus-visible:border-black transition-all"
									autoComplete="off"
									autoCorrect="off"
									type="text"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Textarea
									{...field}
									placeholder="Nội dung, thông điệp*"
									className="text-lg py-5 font-light rounded-sm focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:shadow-md focus-visible:border-black transition-all"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					disabled={form.formState.isSubmitting}
					variant="destructive"
					type="submit"
					className=" p-5 py-8 text-xl font-semibold shadow-md"
				>
					Đăng kí ngay
				</Button>
			</form>
		</Form>
	);
};

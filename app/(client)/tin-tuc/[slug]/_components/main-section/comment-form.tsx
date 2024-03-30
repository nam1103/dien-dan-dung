"use client";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { commentPost } from "@/lib/post-service";
import { commentSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

interface CommentFormProps {
	postId: string;
}

export const CommentForm = ({ postId }: CommentFormProps) => {
	const form = useForm<z.infer<typeof commentSchema>>({
		resolver: zodResolver(commentSchema),
		defaultValues: {
			username: "",
			phoneNumber: "",
			body: "",
		},
	});
	const [isCommented, setIsCommented] = useState(false);

	const onSubmit = async (values: z.infer<typeof commentSchema>) => {
		const statusCode = await commentPost(postId, values);

		if (statusCode === 200) {
			setIsCommented(true);
		}
	};

	if (isCommented) {
		return (
			<div className="bg-green-200 rounded-sm border border-black shadow-md p-2">
				<h1 className="italic font-semibold text-xl">Thành công!</h1>
				<p className="mx-1">
					Cảm ơn đã liên hệ với chúng tôi. Chúng tôi sẽ nhanh nhận phản hồi và
					liên hệ lại với bạn sau.
				</p>
			</div>
		);
	}

	return (
		<Form {...form}>
			<form
				className="max-w-[700px] space-y-4"
				onSubmit={form.handleSubmit(onSubmit)}
			>
				<div className="grid grid-cols-2 gap-x-4">
					<FormField
						name="username"
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel className="leading-none">Tên Người Dùng*</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder="Tên người dùng*"
										className="focus-visible:ring-0 focus-visible:ring-offset-0"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						name="phoneNumber"
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel className="leading-none">Số Điện Thoại</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder="Số điện thoại*"
										className="focus-visible:ring-0 focus-visible:ring-offset-0"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<FormField
					name="body"
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormLabel className="leading-none">
								Nội Dung Bình Luận*
							</FormLabel>
							<FormControl>
								<Textarea
									{...field}
									placeholder="Nội dung bình luận*"
									className="focus-visible:ring-0 focus-visible:ring-offset-0 col-span-2"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					disabled={form.formState.isSubmitting}
					variant="destructive"
					size="lg"
					type="submit"
				>
					Bình Luận
				</Button>
			</form>
		</Form>
	);
};

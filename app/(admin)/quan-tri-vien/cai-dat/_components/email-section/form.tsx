"use client";

import { emailSettingsSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "@prisma/client";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { updateUser } from "@/lib/user-service";
import { toast } from "sonner";

interface EmailSettingsFormProps {
	user: User;
}

export const EmailSettingsForm = ({ user }: EmailSettingsFormProps) => {
	const form = useForm<z.infer<typeof emailSettingsSchema>>({
		resolver: zodResolver(emailSettingsSchema),
		defaultValues: {
			emailedWhenContact: user.emailedWhenContact,
			emailedWhenComment: user.emailedWhenComment,
		},
	});

	const onSubmit = async (values: z.infer<typeof emailSettingsSchema>) => {
		const updatedUser = await updateUser(user.id, values);

		if (updatedUser) {
			toast.success("Thay đổi thành công!");
		} else {
			toast.error("Thay đổi thất bại!");
		}
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 mt-5">
				<FormField
					control={form.control}
					name="emailedWhenComment"
					render={({ field }) => (
						<FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 gap-5 shadow-sm">
							<div className="space-y-0.5">
								<FormLabel>Thông báo Email Bình Luận</FormLabel>
								<FormDescription>
									Thông báo qua email <strong>{user.email}</strong> khi có khách
									hàng bình luận một bài viết bất kì của bạn.
								</FormDescription>
							</div>
							<FormControl>
								<Switch
									checked={field.value}
									onCheckedChange={field.onChange}
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="emailedWhenContact"
					render={({ field }) => (
						<FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 gap-5 shadow-sm">
							<div className="space-y-0.5">
								<FormLabel>Thông báo Email Liên hệ</FormLabel>
								<FormDescription>
									Thông báo qua email <strong>{user.email}</strong> khi có khách
									hàng tạo liên hệ.
								</FormDescription>
							</div>
							<FormControl>
								<Switch
									checked={field.value}
									onCheckedChange={field.onChange}
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<Button type="submit" disabled={form.formState.isSubmitting}>
					Lưu thay đổi
				</Button>
			</form>
		</Form>
	);
};

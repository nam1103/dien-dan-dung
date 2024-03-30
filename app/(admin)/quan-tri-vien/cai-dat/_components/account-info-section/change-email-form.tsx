"use client";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { changeEmailSchema } from "@/lib/schemas";
import { updateUser } from "@/lib/user-service";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "@prisma/client";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

interface ChangeEmailFormProps {
	user: User;
}

export const ChangeEmailForm = ({ user }: ChangeEmailFormProps) => {
	const form = useForm({
		resolver: zodResolver(changeEmailSchema),
		defaultValues: {
			email: user.email,
		},
	});

	const onSubmit = async (values: z.infer<typeof changeEmailSchema>) => {
		const response = await updateUser(user.id, { email: values.email });

		if (response) {
			toast.success("Thay đổi email thành công!");
		} else {
			toast.error("Thay đổi email thất bại!");
		}
	};

	return (
		<Form {...form}>
			<form className="px-1" onSubmit={form.handleSubmit(onSubmit)}>
				<FormField
					name="email"
					render={({ field }) => (
						<FormItem className="mt-3 gap-0">
							<FormLabel className="text-xl">Thay đổi Email</FormLabel>
							<FormDescription>
								Thay đổi email của bạn bao gồm thông báo và đăng nhập
							</FormDescription>
							<FormControl>
								<Input
									{...field}
									placeholder="Emall của bạn"
									className="focus-visible:ring-0 focus-visible:ring-offset-0 border shadow-sm"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
					control={form.control}
				/>
				<Button
					className="mt-3"
					type="submit"
					disabled={
						form.formState.isSubmitting || user.email === form.getValues().email
					}
				>
					Lưu Email
				</Button>
			</form>
		</Form>
	);
};

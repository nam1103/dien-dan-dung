"use client";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { changePasswordSchema } from "@/lib/schemas";
import { changePassword } from "@/lib/user-service";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "@prisma/client";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

interface ChangePasswordProps {
	user: User;
}

export const ChangePassword = ({ user }: ChangePasswordProps) => {
	const form = useForm({
		resolver: zodResolver(changePasswordSchema),
		defaultValues: {
			currentPassword: "",
			newPassword: "",
			confirmNewPassword: "",
		},
	});

	const onSubmit = async (values: z.infer<typeof changePasswordSchema>) => {
		const statusCode = await changePassword(
			user.id,
			values.currentPassword,
			values.newPassword
		);

		if (statusCode === 200) {
			toast.success("Thay đổi mật khẩu thành công!");
		}

		if (statusCode === 500) {
			toast.error("Một sự cố không rõ nguyên nhân đã xảy ra!");
		}

		if (statusCode === 401) {
			toast.error("Mật khâu không chính xác!");
		}
	};

	return (
		<div className="px-1 mt-5">
			<h3 className="text-xl font-medium">Thay Đổi Mật Khẩu</h3>
			<Dialog>
				<DialogTrigger asChild>
					<Button className="mt-3">Đổi mật khẩu</Button>
				</DialogTrigger>
				<DialogContent className="p-0">
					<DialogHeader className="bg-neutral-100 p-4">
						<DialogTitle className="text-center">Đổi Mật Khẩu</DialogTitle>
					</DialogHeader>
					<Form {...form}>
						<form
							className="p-5 space-y-4"
							onSubmit={form.handleSubmit(onSubmit)}
						>
							<FormField
								name="currentPassword"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Mật khẩu hiện tại</FormLabel>
										<FormControl>
											<Input
												{...field}
												placeholder="Mật khẩu hiện tại của bạn"
												className="focus-visible:ring-0 focus-visible:ring-offset-0"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
								control={form.control}
							/>
							<FormField
								name="newPassword"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Mật khẩu mới</FormLabel>
										<FormControl>
											<Input
												{...field}
												placeholder="Mật khẩu mới của bạn"
												className="focus-visible:ring-0 focus-visible:ring-offset-0"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
								control={form.control}
							/>
							<FormField
								name="confirmNewPassword"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Xác nhận mật khẩu mới</FormLabel>
										<FormControl>
											<Input
												{...field}
												placeholder="Xác nhận mật khẩu mới"
												className="focus-visible:ring-0 focus-visible:ring-offset-0"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
								control={form.control}
							/>

							<DialogFooter className="gap-2">
								<Button type="submit" disabled={form.formState.isSubmitting}>
									Đổi
								</Button>
								<DialogClose asChild>
									<Button type="button" variant="secondary">
										Huỷ
									</Button>
								</DialogClose>
							</DialogFooter>
						</form>
					</Form>
				</DialogContent>
			</Dialog>
		</div>
	);
};

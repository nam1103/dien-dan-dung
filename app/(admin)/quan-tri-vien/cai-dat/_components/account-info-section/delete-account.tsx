"use client";

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
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
import { confirmPasswordSchema } from "@/lib/schemas";
import { deleteUser, logoutUser } from "@/lib/user-service";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "@prisma/client";
import { MouseEventHandler, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface DeleteAccountProps {
	user: User;
}

export const DeleteAccount = ({ user }: DeleteAccountProps) => {
	const form = useForm({
		resolver: zodResolver(confirmPasswordSchema),
		defaultValues: { password: "" },
	});
	const [isPending, setIsPending] = useState(false);

	const onConfirm: MouseEventHandler<HTMLButtonElement> = async (event) => {
		event.stopPropagation();

		setIsPending(true);
		const password = form.getValues().password;
		const statusCode = await deleteUser(user.id, password);

		if (statusCode === 200) {
			await logoutUser();
		}

		if (statusCode === 500) {
			toast.error("Một sự cố không rõ nguyên nhân đã xảy ra!");
		}

		if (statusCode === 401) {
			toast.error("Mật khâu không chính xác!");
		}

		setIsPending(false);
	};

	return (
		<div className="px-1 mt-5">
			<h3 className="text-xl font-medium">Xoá Tài Khoản</h3>
			<p className="mt-2 text-muted-foreground text-sm">
				Xoá mọi thông tin dữ liêụ liên quan đến bạn trong trang web này. Muốn
				tạo một tài khoản mới bạn phải liên hệ với tôi.
			</p>
			<AlertDialog>
				<AlertDialogTrigger asChild>
					<Button variant="destructive" className="mt-3">
						Xoá tài khoản
					</Button>
				</AlertDialogTrigger>
				<AlertDialogContent className="gap-0 p-0 overflow-hidden">
					<AlertDialogHeader className="bg-neutral-100 p-2">
						<AlertDialogTitle className="text-center">
							Bạn chắc chứ?
						</AlertDialogTitle>
						<AlertDialogDescription className="text-center">
							Hành động này sẽ không được undo đâu!
						</AlertDialogDescription>
					</AlertDialogHeader>
					<Form {...form}>
						<form className="px-5 py-3" onSubmit={(e) => e.preventDefault()}>
							<FormField
								name="password"
								render={({ field }) => (
									<FormItem className="mt-3 gap-0">
										<FormLabel className="text-xl">
											Nhập mật khẩu để tiếp tục
										</FormLabel>

										<FormControl>
											<Input
												{...field}
												type="password"
												placeholder="Mật khẩu của bạn"
												className="focus-visible:ring-0 focus-visible:ring-offset-0 border shadow-sm"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
								control={form.control}
							/>
						</form>
					</Form>
					<AlertDialogFooter className="pb-5 px-5">
						<AlertDialogCancel>Huỷ</AlertDialogCancel>
						<AlertDialogAction
							disabled={isPending || !form.getValues().password}
							onClick={onConfirm}
						>
							Xoá
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</div>
	);
};

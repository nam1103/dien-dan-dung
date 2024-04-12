"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardHeader,
	CardDescription,
	CardTitle,
	CardContent,
} from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios, { AxiosError } from "axios";

export const LoginForm = () => {
	const [isPasswordHidden, setIsPasswordHidden] = useState(true);

	const router = useRouter();
	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: { email: "", password: "" },
	});

	const onSubmit = async (values: z.infer<typeof loginSchema>) => {
		try {
			await axios.post("/api/login", values);
			router.push("/quan-tri-vien");
		} catch (error) {
			if (axios.isAxiosError(error)) {
				toast.error(error?.response?.data.error);
			}
		}
	};

	return (
		<Card className="sm:w-[400px] w-full sm:rounded-md rounded-none  bg-white/80">
			<CardHeader>
				<CardTitle>Đăng Nhập</CardTitle>
				<CardDescription>Chỉ Dành Cho Quản Trị Viên</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<FormField
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="font-semibold text-lg">Email</FormLabel>
									<FormControl>
										<Input
											{...field}
											type="email"
											className="focus-visible:ring-0 focus-visible:ring-offset-0"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
							control={form.control}
						/>
						<FormField
							name="password"
							render={({ field }) => (
								<FormItem className="mt-4">
									<FormLabel className="font-semibold text-lg">
										Mật khẩu
									</FormLabel>
									<FormControl>
										<div className="relative">
											<Input
												{...field}
												type={isPasswordHidden ? "password" : "text"}
												className="focus-visible:ring-0 focus-visible:ring-offset-0 pr-10"
											/>
											{isPasswordHidden ? (
												<EyeOff
													onClick={() => setIsPasswordHidden(false)}
													className="absolute top-1/2 -translate-y-1/2 right-3 stroke-[1.3px] h-5 w-5 cursor-pointer"
												/>
											) : (
												<Eye
													onClick={() => setIsPasswordHidden(true)}
													className="absolute top-1/2 -translate-y-1/2 right-3 stroke-[1.3px] h-5 w-5 cursor-pointer"
												/>
											)}
										</div>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
							control={form.control}
						/>
						<div className="grid grid-cols-2 mt-6 gap-x-4">
							<Button disabled={form.formState.isSubmitting} type="submit">
								Đăng Nhập
							</Button>
							<Button
								type="button"
								variant="secondary"
								onClick={() => router.push("/")}
							>
								Trang Chủ
							</Button>
						</div>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
};

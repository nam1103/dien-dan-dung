"use client";

import ImageUpload from "@/components/shared/image-upload";
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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { createPost } from "@/lib/post-service";
import { postSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Category } from "@prisma/client";
import { Loader2 } from "lucide-react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { toast } from "sonner";

import * as z from "zod";

const RichTextEditor = dynamic(
	() => import("@/components/shared/rich-text-editor"),
	{
		loading: () => {
			return (
				<div className="h-[400px] flex items-center justify-center rounded-lg bg-slate-100">
					<Loader2 className="h-10 w-10 animate-spin" />
				</div>
			);
		},
		ssr: false,
	}
);

interface CreatePostFormProps {
	categories: Category[];
}

export const CreatePostForm = ({ categories }: CreatePostFormProps) => {
	const form = useForm<z.infer<typeof postSchema>>({
		resolver: zodResolver(postSchema),
		defaultValues: { title: "", body: "", images: [] },
	});

	const router = useRouter();

	const onSubmit = async (values: z.infer<typeof postSchema>) => {
		const response = await createPost(values);

		if (response.status === 500) {
			toast.error("Một sự cố đã xãy ra");
		}

		if (response.status === 200) {
			toast.success(`Đã tạo bài viết "${response.data?.title}"`);
			router.push("/quan-tri-vien/tin-tuc");
		}
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<FormField
					name="title"
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-xl">Tiêu Đề</FormLabel>
							<FormDescription>
								Tạo tiêu dề cho bài viết của bạn
							</FormDescription>
							<FormControl>
								<Input
									{...field}
									placeholder="Tiêu đề"
									className="focus-visible:ring-0 focus-visible:ring-offset-0"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					name="category_id"
					control={form.control}
					render={({ field }) => (
						<FormItem className="mt-6">
							<FormLabel className="text-xl">Danh Mục</FormLabel>
							<FormDescription>
								Danh Mục Giúp Bài Viết Của Bạn Dễ Tìm Kiếm Hơn
							</FormDescription>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
									<SelectTrigger className="focus-visible:ring-0 focus:ring-0 focus:ring-offset-0 ring-0 ring-offset-0 focus-visible:ring-offset-0">
										<SelectValue placeholder="Chọn Danh Mục" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									{categories.map((category) => (
										<SelectItem value={category.id} key={category.id}>
											{category.title}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="images"
					render={({ field }) => (
						<FormItem className="mt-6">
							<FormLabel className="text-xl">Đăng Ảnh</FormLabel>
							<FormControl>
								<ImageUpload
									value={field.value.map((image) => image.url)}
									disabled={form.formState.isSubmitting}
									onChange={(url) => field.onChange([...field.value, { url }])}
									onRemove={(url) =>
										field.onChange([
											...field.value.filter((current) => current.url !== url),
										])
									}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					name="body"
					control={form.control}
					render={({ field }) => (
						<FormItem className="mt-6">
							<FormLabel className="text-xl">Nội Dung</FormLabel>
							<FormDescription>
								Nội dung sẽ được hiển thị cho người dùng
							</FormDescription>
							<FormControl>
								<RichTextEditor onChange={field.onChange} value={field.value} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					disabled={form.formState.isSubmitting}
					type="submit"
					className="mt-16"
				>
					Đăng bài viết
				</Button>
			</form>
		</Form>
	);
};

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
import { createCategory } from "@/lib/category-service";
import { categorySchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { categoryMode } from "./category";

interface CategoryFormProps {
	onChangeMode: (mode: categoryMode) => void;
}

export const CategoryForm = ({ onChangeMode }: CategoryFormProps) => {
	const form = useForm<z.infer<typeof categorySchema>>({
		resolver: zodResolver(categorySchema),
		defaultValues: {
			title: "",
		},
	});

	const onSubmit = async (values: z.infer<typeof categorySchema>) => {
		const response = await createCategory(values);

		if (response.status === 200) {
			toast.success("Tạo danh mục thành công");
			onChangeMode(categoryMode.MANAGE);
		} else {
			toast.error("Một sự cố đã xảy ra");
		}
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
				<FormField
					control={form.control}
					name="title"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Tiêu Đề</FormLabel>
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
				<Button type="submit" disabled={form.formState.isSubmitting}>
					Tạo
				</Button>
			</form>
		</Form>
	);
};

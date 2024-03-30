"use client";

import { Separator } from "@/components/ui/separator";
import { Post } from "@prisma/client";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Copy, Edit, Image, MoreHorizontal, Trash2 } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MouseEventHandler } from "react";
import { toast } from "sonner";
import { deletePost } from "@/lib/post-service";

interface PostItemProps {
	data: Post;
}

export const PostItem = ({ data }: PostItemProps) => {
	const router = useRouter();

	const onPostClick = () => {
		router.push(`/quan-tri-vien/tin-tuc/${data.slug}`);
	};

	const onCopyLink: MouseEventHandler<HTMLDivElement> = async (event) => {
		event.stopPropagation();
		if (!window) return;
		await navigator.clipboard.writeText(
			`${window.location.href}/tin-tuc/${data.slug}`
		);
		toast.success("Link đã được copy vào clipboard");
	};

	const onDelete: MouseEventHandler<HTMLDivElement> = async (event) => {
		event.stopPropagation();

		const statusCode = await deletePost(data.id);

		if (statusCode === 200) {
			toast.success(`Bài viết ${data.title} đã bị xoá`);
		} else {
			toast.error("Một sự cố đã xãy ra");
		}
	};

	const onRedirect: MouseEventHandler<HTMLDivElement> = async (event) => {
		event.stopPropagation();

		router.push(`/quan-tri-vien/tin-tuc/${data.slug}?edit=1`);
	};

	return (
		<div
			onClick={onPostClick}
			className="w-full flex cursor-pointer p-5 flex-col gap-y-3 hover:bg-neutral-100 group transition rounded-lg"
		>
			<div className="flex justify-between">
				<div>
					<h1 className="text-2xl font-semibold break-all">{data.title}</h1>
					<p className="text-xs font-semibold text-muted-foreground">
						{format(data.createdAt, "yyyy-MM-dd HH:mm:ss")}
					</p>
				</div>

				<DropdownMenu>
					<DropdownMenuTrigger
						asChild
						className="focus-visible:ring-0 focus-visible:ring-offset-0"
					>
						<Button
							size="icon"
							variant="secondary"
							className="group-hover:bg-neutral-400 shrink-0"
						>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>

					<DropdownMenuContent>
						<DropdownMenuItem className="gap-x-2" onClick={onDelete}>
							<Trash2 className="h-5 w-5" />
							Xoá
						</DropdownMenuItem>
						<DropdownMenuItem className="gap-x-2" onClick={onRedirect}>
							<Edit className="h-5 w-5" />
							Chỉnh sửa
						</DropdownMenuItem>
						<DropdownMenuItem className="gap-x-2" onClick={onCopyLink}>
							<Copy className="h-5 w-5" />
							Copy link
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
			{data.imageUrls?.[0] ? (
				<img src={data.imageUrls[0]} className="sm:w-[400px] w-full" />
			) : (
				<div className="sm:w-[400px] w-full h-[200px] gap-x-4 flex items-center p-8 bg-neutral-100 group-hover:text-white group-hover:bg-neutral-400 rounded-lg justify-center">
					<Image className="h-5 w-5" />
					<p className="font-semibold text-sm">Chưa thêm ảnh</p>
				</div>
			)}

			<Separator className="border-2" />
		</div>
	);
};

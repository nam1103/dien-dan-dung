"use client";

import { Separator } from "@/components/ui/separator";
import { Post } from "@prisma/client";
import { useRouter } from "next/navigation";
import { format } from "date-fns";

import { Image } from "lucide-react";

interface PostItemProps {
	data: Post;
}

export const PostItem = ({ data }: PostItemProps) => {
	const router = useRouter();

	const onPostClick = () => {
		router.push(`/tin-tuc/${data.slug}`);
	};

	return (
		<div
			onClick={onPostClick}
			className="w-full flex cursor-pointer p-5 flex-col gap-y-3 hover:bg-neutral-100 group transition rounded-lg"
		>
			<div>
				<h1 className="text-3xl font-semibold text-rose-500 italic capitalize break-all">
					{data.title}
				</h1>
				<p className="text-xs font-semibold text-muted-foreground">
					{format(data.createdAt, "dd/MM/yyyy")}
				</p>
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

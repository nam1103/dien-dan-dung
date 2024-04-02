import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { PostWithCommentAndRatings } from "@/types";
import { useMemo, useState } from "react";
import { PhoneCall, Star, Trash } from "lucide-react";
import { format } from "date-fns";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { deleteComment } from "@/lib/post-service";
import { toast } from "sonner";

interface PostInfoProps {
	data: PostWithCommentAndRatings;
}

export const PostInfo = ({ data }: PostInfoProps) => {
	const [loadingId, setLoadingId] = useState<string | null>(null);

	const averageRating = useMemo(() => {
		if (data.ratings.length === 0) {
			return 0;
		}

		const total = data.ratings.reduce(
			(accumulator, rating) => accumulator + rating.value,
			0
		);
		const average = Math.floor(total / data.ratings.length);

		return average;
	}, []);

	const handleCall = (phoneNumber: string) => {
		window.location.href = `tel:${phoneNumber}`;
	};

	const handleDelete = async (id: string) => {
		setLoadingId(id);
		const statusCode = await deleteComment(id, data.id);

		if (statusCode === 200) {
			toast.success("Xoá bình luận thành công");
		} else {
			toast.error("Một sự cố đã xãy ra!");
		}
		setLoadingId(null);
	};

	return (
		<div className="w-full">
			<h2 className=" text-2xl font-semibold">Thông Tin Của Bài Viết</h2>
			<Accordion type="multiple" className="px-1">
				<AccordionItem value="danh-gia" defaultChecked>
					<AccordionTrigger>Đánh giá của khách hàng</AccordionTrigger>
					<AccordionContent>
						<p className="flex items-center">
							Trung Bình: <strong className="ml-1">{averageRating}</strong>
							<Star className="fill-black h-4 w-4" />
						</p>
						<p className="flex items-center">
							Lượt Bình Chọn:{" "}
							<strong className="ml-1">{data.ratings.length}</strong>
						</p>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem
					value="binh-luan"
					defaultChecked
					defaultValue="binh-luan"
				>
					<AccordionTrigger>Bình luận của khách hàng</AccordionTrigger>
					<AccordionContent>
						{data.comments.map((comment, index) => (
							<div className="px-5 gap-y-4" key={comment.id}>
								<div className="flex justify-between items-center ">
									<p className="text-xl font-semibold ">{comment.username}</p>
									<p className="text-xs font-semibold text-muted-foreground">
										{format(comment.createdAt, "yyyy-MM-dd HH:mm:ss")}
									</p>
								</div>
								<div className="flex justify-between items-center">
									<p>
										Số Điện Thoại: <strong>{comment.phoneNumber}</strong>
									</p>
									<div className="flex space-x-3 py-3">
										<Button
											size="icon"
											onClick={() => handleCall(comment.phoneNumber)}
										>
											<PhoneCall className="h-5 w-5" />
										</Button>
										<Button
											size="icon"
											variant="destructive"
											onClick={() => handleDelete(comment.id)}
											disabled={loadingId === comment.id}
										>
											<Trash className="h-5 w-5" />
										</Button>
									</div>
								</div>
								{data.comments.length !== index + 1 && <Separator />}
							</div>
						))}
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
};

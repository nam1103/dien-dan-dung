"use client";

import { ratePost } from "@/lib/post-service";
import { cn } from "@/lib/utils";
import { PostWithRatings } from "@/types";
import { useMemo, useState } from "react";
import { IoStar } from "react-icons/io5";
interface StarRatingProps {
	data: PostWithRatings;
}

export const StarRating = ({ data }: StarRatingProps) => {
	const [dragValue, setDragValue] = useState(0);

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
	}, [data.ratings]);

	const handleRate = async (value: number) => {
		await ratePost(data.id, data.slug, value);
	};

	return (
		<div className="py-5 flex gap-x-5 items-center">
			<div className="flex gap-x-1">
				{Array(5)
					.fill(null)
					.map((_, index) => (
						<IoStar
							onMouseOut={() => setDragValue(0)}
							onMouseOver={() => setDragValue(index + 1)}
							onClick={() => handleRate(index + 1)}
							key={index}
							className={cn(
								"h-5 w-5 stroke-black fill-white stroke-[10px] cursor-pointer",
								index < averageRating && "fill-orange-400",
								index < dragValue && "fill-yellow-300"
							)}
						/>
					))}
			</div>
			<p className="font-light">{`${averageRating}/5 - (${data.ratings.length} bình chọn)`}</p>
		</div>
	);
};

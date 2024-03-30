import { PostContent } from "./post-content";
import { StarRating } from "./star-rating";
import { PostWithRatings } from "@/types";

interface MainSectionProps {
	data: PostWithRatings;
}

export const MainSection = ({ data }: MainSectionProps) => {
	return (
		<div className="px-7 md:px-10 lg:px-14 xl:px-20 w-full">
			<StarRating data={data} />
			<PostContent
				content={data.body}
				imageUrls={data.imageUrls}
				postId={data.id}
			/>
		</div>
	);
};

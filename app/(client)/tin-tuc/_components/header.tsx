import { Newspaper } from "lucide-react";

export const Header = () => {
	return (
		<div className="w-full px-7 md:px-10 lg:px-14 xl:px-20 pt-10 space-y-2">
			<div className="flex gap-x-3 items-center text-neutral-800">
				<Newspaper className="h-6 w-6" />
				<span className="uppercase md:text-xl text-lg font-medium">
					Tin Tức Của ServiceHome
				</span>
			</div>
			<div className="border-b-2" />
		</div>
	);
};

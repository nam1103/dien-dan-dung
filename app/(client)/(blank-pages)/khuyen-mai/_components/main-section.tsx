import { BackToHomeButton } from "@/components/shared/back-to-home-button";
import { Meh } from "lucide-react";

export const MainSection = () => {
	return (
		<div className=" flex flex-col items-center px-7 md:px-10 lg:px-14 xl:px-20 pb-20 pt-6">
			<div className="text-5xl font-bold flex items-center gap-2">
				<Meh className="w-12 h-12 stroke-[3px]" />
				404!
			</div>
			<h1 className="text-3xl underline mt-2">
				<strong>KHUYẾN MÃI</strong> hiện đang được cập nhật
			</h1>
			<BackToHomeButton className="mt-7" />
		</div>
	);
};

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import Link from "next/link";

export const Header = () => {
	return (
		<div className="w-full py-7 space-y-2">
			<div className="w-full flex justify-between">
				<h1 className="text-neutral-800 text-4xl font-semibold">
					Tin Tức Của Bạn
				</h1>
				<Link href="/quan-tri-vien/tin-tuc/create">
					<Button size="icon">
						<Plus className="h-5 w-5" />
					</Button>
				</Link>
			</div>

			<Separator className="w-full border-2" />
		</div>
	);
};

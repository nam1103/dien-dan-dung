import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Eye, Undo } from "lucide-react";
import Link from "next/link";

interface HeaderProps {
	title: string;
	slug: string;
}

export const Header = ({ title, slug }: HeaderProps) => {
	return (
		<div className="w-full py-7 space-y-2">
			<div className="w-full flex justify-between">
				<h1 className="text-neutral-800 text-4xl font-semibold truncate">
					Bài Viết "{title}"
				</h1>
				<div className="space-x-2 shrink-0">
					<Link href={`/tin-tuc/${slug}`}>
						<Button size="icon">
							<Eye className="h-5 w-5" />
						</Button>
					</Link>
					<Link href="/quan-tri-vien/tin-tuc">
						<Button size="icon">
							<Undo className="h-5 w-5" />
						</Button>
					</Link>
				</div>
			</div>

			<Separator className="w-full border-2" />
		</div>
	);
};

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Home } from "lucide-react";
import Link from "next/link";

export const HomeCard = async () => {
	return (
		<Link href="/">
			<Card className="shadow-md max-w-[300px] hover:bg-neutral-50 transition">
				<CardHeader>
					<CardTitle>Trang Chủ</CardTitle>
					<CardDescription>Trở về trang chủ</CardDescription>
				</CardHeader>
				<CardContent>
					<Home className=" h-28 w-28" />
				</CardContent>
			</Card>
		</Link>
	);
};

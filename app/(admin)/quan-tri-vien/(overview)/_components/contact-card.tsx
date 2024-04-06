import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { getContacts } from "@/lib/contact-service";
import { PhoneCall } from "lucide-react";
import Link from "next/link";

export const ContactCard = async () => {
	const contacts = await getContacts();

	return (
		<Link href="/quan-tri-vien/lien-he ">
			<Card className="shadow-md max-w-[300px] hover:bg-neutral-50 transition">
				<CardHeader>
					<CardTitle>Liên Hệ</CardTitle>
					<CardDescription>Quản lí liên hệ từ khách hàng</CardDescription>
				</CardHeader>
				<CardContent>
					<PhoneCall className=" h-28 w-28" />
					<p className="font-semibold text-neutral-500 mt-6">
						Bạn hiện đang có {contacts.length} bài viết
					</p>
				</CardContent>
			</Card>
		</Link>
	);
};

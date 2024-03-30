"use client";

import { Contact } from "@prisma/client";
import { ContactItem } from "./contact-item";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface ContactListProps {
	data: Contact[];
}

export const ContactList = ({ data }: ContactListProps) => {
	const router = useRouter();

	const onRefresh = () => {
		router.refresh();
	};

	if (!data.length) {
		return (
			<div className="w-full py-20 flex flex-col items-center gap-5">
				<h1 className="text-2xl font-semibold text-muted-foreground text-center ">
					Không Có Liên Hệ Từ Khách Hàng
				</h1>
				<Button onClick={onRefresh} size="lg">
					Làm Mới
				</Button>
			</div>
		);
	}

	return (
		<div className="w-full py-5 space-y-5">
			{data.map((contact) => (
				<ContactItem
					id={contact.id}
					phoneNumber={contact.phoneNumber}
					username={contact.username}
					message={contact.message}
					email={contact.email}
					createdAt={contact.createdAt}
				/>
			))}
		</div>
	);
};

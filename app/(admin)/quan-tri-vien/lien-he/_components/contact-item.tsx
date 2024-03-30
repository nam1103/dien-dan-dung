"use client";

import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Mail, PhoneCall, Trash } from "lucide-react";
import { MouseEventHandler, useState } from "react";
import { deleteContact } from "@/lib/contact-service";
import { toast } from "sonner";

interface ContactItemProps {
	id: string;
	phoneNumber: string;
	email: string | null;
	username: string;
	message: string;
	createdAt: Date;
}

export const ContactItem = ({
	id,
	phoneNumber,
	email,
	message,
	username,
	createdAt,
}: ContactItemProps) => {
	const [isDeleting, setIsDeleting] = useState(false);

	const handleCall: MouseEventHandler<HTMLButtonElement> = (e) => {
		e.stopPropagation();
		window.location.href = `tel:${phoneNumber}`;
	};

	const handleDelete: MouseEventHandler<HTMLButtonElement> = async (e) => {
		e.stopPropagation();
		setIsDeleting(true);
		const data = await deleteContact(id);

		if (data) {
			toast.success("Xoá thành công!");
		} else {
			toast.error("Xoá thất bại!");
		}

		setIsDeleting(false);
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<div className="w-full rounded-sm shadow-md p-3 bg-neutral-50 border border-1 hover:bg-neutral-100 cursor-pointer">
					<div className="flex justify-between">
						<h3 className="text-xl text-neutral-808 font-semibold mb-3">
							{username}
						</h3>
						<p className="text-xs font-semibold text-muted-foreground">
							{format(createdAt, "yyyy-MM-dd HH:mm:ss")}
						</p>
					</div>
					<div className="flex justify-between items-center">
						<div>
							<div className="flex items-center gap-3">
								<PhoneCall className="h-4 w-4" />
								<p className="text-sm ">{phoneNumber}</p>
							</div>
							{email && (
								<div className="flex items-center gap-3">
									<Mail className="h-4 w-4" />
									<p className="text-sm">{email}</p>
								</div>
							)}
						</div>
						<div className="space-x-2">
							<Button size="icon" onClick={handleCall} className="flex-1">
								<PhoneCall className="h-5 w-5" />
							</Button>
							<Button
								variant="destructive"
								size="icon"
								disabled={isDeleting}
								onClick={handleDelete}
							>
								<Trash className="h-5 w-5" />
							</Button>
						</div>
					</div>
				</div>
			</DialogTrigger>
			<DialogContent className="">
				<DialogHeader className="">
					<DialogTitle className="">
						<div className="flex flex-row items-center justify-between">
							<h3 className="text-xl text-neutral-800 font-semibold mb-3">
								{username}
							</h3>
							<p className="text-xs font-semibold text-muted-foreground ml-auto">
								{format(createdAt, "yyyy-MM-dd HH:mm:ss")}
							</p>
						</div>
					</DialogTitle>
					<DialogDescription className="flex flex-col items-start">
						{email && <p>Email: {email}</p>}
						<p>Số điện thoại: {phoneNumber}</p>
					</DialogDescription>
				</DialogHeader>
				<div className="max-w-[500px]">
					<h2 className="font-semibold">Nội dung gửi đến: </h2>
					<p className="text-sm text-muted-foreground max-w-[300px] line-clamp-5">
						{message}
					</p>
				</div>

				<DialogFooter className="flex flex-row gap-x-2">
					<Button size="icon" onClick={handleCall} className="flex-1">
						<PhoneCall className="h-5 w-5" />
					</Button>
					<Button
						variant="destructive"
						size="icon"
						disabled={isDeleting}
						onClick={handleDelete}
					>
						<Trash className="h-5 w-5" />
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

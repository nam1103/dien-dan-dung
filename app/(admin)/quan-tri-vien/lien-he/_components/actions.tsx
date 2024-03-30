"use client";

import { Button } from "@/components/ui/button";
import { useDebounceValue } from "usehooks-ts";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Trash } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import qs from "query-string";
import { usePathname, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { DialogFooter } from "@/components/ui/dialog";
import { deleteAllContacts } from "@/lib/contact-service";
import { toast } from "sonner";

export const Actions = () => {
	const [order, setOrder] = useState<"asc" | "desc">("asc");
	const [username, setUsername] = useState("");
	const debouncedUsername = useDebounceValue(username, 500);
	const router = useRouter();
	const closeRef = useRef(null);
	const pathname = usePathname();

	const handleValueChange = (value: "asc" | "desc") => {
		setOrder(value);
		const url = qs.stringifyUrl(
			{ url: pathname, query: { order } },
			{ skipEmptyString: true, skipNull: true }
		);
		router.push(url);
	};

	const handleDeleteAll = async () => {
		const statusCode = await deleteAllContacts();
		if (closeRef.current) {
			// @ts-ignore
			closeRef.current.click();
		}

		if (statusCode === 200) {
			toast.success("Xoá tất cả thành công!");
		} else {
			toast.error("Xoá tất cả thất bại!");
		}
	};

	useEffect(() => {
		const url = qs.stringifyUrl(
			{ url: pathname, query: { order, username } },
			{ skipEmptyString: true, skipNull: true }
		);

		router.push(url);
	}, [debouncedUsername]);

	return (
		<div className="w-full flex items-center gap-x-4">
			<Select defaultValue={order} onValueChange={handleValueChange}>
				<SelectTrigger
					defaultValue="asc"
					className="focus-visible:ring-0 focus:ring-0 focus:ring-offset-0 ring-0 ring-offset-0 focus-visible:ring-offset-0 shadow-sm"
				>
					<SelectValue defaultValue="asc" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="asc" className="flex flex-row gap-2">
						Cũ Nhất
					</SelectItem>
					<SelectItem value="desc">Mới Nhất</SelectItem>
				</SelectContent>
			</Select>
			<Input
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				placeholder="Tìm kiếm tên..."
				className="focus-visible:ring-0 focus:ring-0 focus:ring-offset-0 ring-0 ring-offset-0 focus-visible:ring-offset-0 shadow-sm"
			/>
			<AlertDialog>
				<AlertDialogTrigger asChild>
					<Button variant="destructive" size="icon" className="shadow-sm p-3">
						<Trash className="h-5 w-5" />
					</Button>
				</AlertDialogTrigger>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>
							Xoá Hết Tất Cả Liên Hệ Của Khách Hàng
						</AlertDialogTitle>
						<AlertDialogDescription>
							Bạn Chắc Chứ Vì Hành Động Này Không Thể Undo!
						</AlertDialogDescription>
					</AlertDialogHeader>
					<DialogFooter>
						<Button variant="destructive" onClick={handleDeleteAll}>
							Xoá
						</Button>
						<AlertDialogCancel ref={closeRef}>Huỷ</AlertDialogCancel>
					</DialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</div>
	);
};

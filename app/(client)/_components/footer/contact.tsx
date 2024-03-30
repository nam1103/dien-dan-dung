"use client";

import { Button } from "@/components/ui/button";
import { contactInfo } from "@/constants";
import Link from "next/link";

export const Contact = () => {
	const handleCall = () => {
		window.location.href = `tel:${contactInfo.hotline.replaceAll(".", "")}`;
	};

	return (
		<div className="col-span-2">
			<div className="flex gap-x-2">
				<div className="border-l-4 border-l-orange-500" />
				<h2 className="uppercase text-2xl text-white">Liên hệ tư vấn</h2>
			</div>
			<h2
				onClick={handleCall}
				className="text-orange-500 text-2xl mt-4 font-bold hover:text-white transition-colors cursor-pointer"
			>
				{contactInfo.hotline.replaceAll(".", " ")}
			</h2>
			<p className="text-white text-sm mt-4">
				Trò chuyện cùng chuyên viên kĩ thuật chuyên nghiệp
			</p>
			<Button
				variant="outline"
				size="lg"
				className="mt-4 uppercase"
				onClick={handleCall}
			>
				Liên hệ ngay
			</Button>
			<div className="text-yellow-400 flex flex-col font-light mt-6 text-sm">
				<Link href="/dieu-khoang-su-dung">Điều khoản sử dụng</Link>
				<Link href="/chinh-sach-bao-hanh">Chính sách bảo hành</Link>
				<Link href="/chin-sach-bao-mat">Chính sách bảo mật</Link>
			</div>
		</div>
	);
};

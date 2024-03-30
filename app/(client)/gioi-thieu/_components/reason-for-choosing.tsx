"use client";

import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { Gem } from "lucide-react";

export const ReasonForChoosing = () => {
	return (
		<Container innerClassName="flex flex-col items-center gap-y-5">
			<h2 className="md:text-3xl text-xl max-w-[900px] px-10 text-center font-semibold text-yellow-400 drop-shadow-md">
				TẠI SAO NÊN CHỌN DỊCH VỤ SỬA CHỬA ĐIỆN NƯỚC, THÔNG NGHẸT, CHỐNG THẤM TẠI
				CÁO PHÚC
			</h2>
			<div className="grid sm:grid-cols-2 grid-cols-1 md:px-11 px-8 gap-y-4 gap-x-7">
				<div className="space-y-4 ">
					<div className="flex gap-x-2 items-center">
						<Gem className="h-4 w-4" />
						<p>Đội Thợ Chuyên Nghiệp</p>
					</div>
					<div className="flex gap-x-2 items-center">
						<Gem className="h-4 w-4" />
						<p>Bảo Hành Chu Đáo </p>
					</div>
					<div className="flex gap-x-2 items-center">
						<Gem className="h-4 w-4" />
						<p>Giá Cả Cạnh Tranh</p>
					</div>
				</div>
				<div className="space-y-4 ">
					<div className="flex gap-x-2 items-center">
						<Gem className="h-4 w-4" />
						<p>Đa Dạng Dịch Vụ</p>
					</div>
					<div className="flex gap-x-2 items-center">
						<Gem className="h-4 w-4" />
						<p>Tư Vấn 24/7</p>
					</div>
					<div className="flex gap-x-2 items-center">
						<Gem className="h-4 w-4" />
						<p>Liên Kết Nhiều Nơi</p>
					</div>
				</div>
			</div>
			<Button
				onClick={() => {}}
				variant="destructive"
				className="rounded-full mx-auto"
			>
				GỌI NGAY ĐỂ ĐƯỢC TƯ VẤN
			</Button>
		</Container>
	);
};

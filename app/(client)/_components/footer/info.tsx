import { addresses } from "@/constants";
import Image from "next/image";

export const InfoSection = () => {
	return (
		<div className="col-span-4 space-y-5">
			<div className="relative w-[150px] aspect-[134/88]">
				<Image
					fill
					alt="Logo"
					src="/logo.png"
					className="invert brightness-0"
				/>
			</div>
			<p className="text-white text-sm max-w-[300px]">
				Giải pháp dẫn đầu trên thị trường cho các vấn đề sửa chữa điện nước, bảo
				trì lắp đặt nâng cấp thiết bị tại nhà, với phương châm:{" "}
				<strong>Uy Tín - Chất Lượng - Giá Rẻ</strong>.
			</p>
			<p className="text-white text-sm max-w-[300px]">
				Trụ sở: {addresses.office}
			</p>
			<div className="flex gap-x-2">
				<div className="border-l-4 border-l-orange-500" />
				<h2 className="uppercase text-2xl text-white">Giờ làm việc</h2>
			</div>
			<p className="text-white text-sm -mt-10">
				<strong>T2 - CN:</strong> 08am - 9pm
			</p>
			<div className="border border-neutral-300 max-w-[300px] w-full" />
		</div>
	);
};

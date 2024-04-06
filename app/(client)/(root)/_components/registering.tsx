import { Mail } from "lucide-react";

export const Registering = () => {
	return (
		<div className="relative ">
			<div className="bg-red-500 h-[125px]"></div>
			<div className="bg-neutral-600 h-[125px]"></div>

			<div className="w-full max-w-[700px] absolute top-1/2 space-y-5 right-1/2 transform translate-x-1/2 -translate-y-1/2 bg-white p-8 shadow-md">
				<div className="flex items-center gap-x-3">
					<Mail className="h-7 w-7 text-yellow-600" />
					<p className="uppercase font-semibold text-2xl">
						đăng kí nhận thông tin
					</p>
				</div>
				<p className="uppercase font-light text-md line-clamp-2 max-w-[450px]">
					GỌI NGAY ĐỂ NHẬN ĐƯỢC SỰ HỔ TRỢ VÀ TƯ VẤN CỦA CHÚNG TÔI
				</p>
			</div>
		</div>
	);
};

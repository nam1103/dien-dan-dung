import { Container } from "@/components/shared/container";
import { Separator } from "@/components/ui/separator";
import { Gem } from "lucide-react";

const services = [
	"SỬA CHẬP ĐIỆN KHẨN CẤP",
	"SỬA CHỮA, LẮP ĐẶT ĐIỆN",
	"LẮP ĐẶT, SỬA CHỮA BÓNG ĐÈN",
	"Ổ CẮM, CB, CẦU DAO",
	,
	"ĐI DÂY ĐIỆN ÂM TƯỜNG",
	,
	"LẮP ĐỒNG HỒ KIỂM ĐỊNH 1P,3P",
	,
	"LẮP ĐẶT THIẾT BỊ ĐIỆN DÂN DỤNG",
];

export const Services = () => {
	return (
		<div className="mt-5">
			<Container
				innerClassName="flex flex-col items-center"
				className="bg-yellow-50 py-5"
			>
				<h2 className="md:text-3xl text-xl max-w-[900px] px-10 text-center font-semibold text-yellow-400 drop-shadow-md">
					CÁO PHÚC DỊCH VỤ SỬA CHỬA ĐIỆN, NƯỚC, THÔNG NGHẸT, CHỐNG THẤM CHUYÊN
					NGHIỆP NHẤT TẠI NHÀ SỐ 1 VIỆT NAM
				</h2>
				<div className="bg-red-400 w-full max-w-[500px] p-5 mt-5">
					<div className="bg-red-500 text-white font-semibold text-center p-2 mb-3">
						CÁC DANH MỤC SỬA ĐIỆN
					</div>
					{services.map((service) => (
						<>
							<div className="flex items-center gap-2 group mt-2">
								<Gem className="h-5 w-5 text-yellow-400" />
								<p className="text-white text-lg hover:text-neutral-500 transition-colors">
									{service}
								</p>
							</div>
							<Separator />
						</>
					))}
				</div>
			</Container>
		</div>
	);
};

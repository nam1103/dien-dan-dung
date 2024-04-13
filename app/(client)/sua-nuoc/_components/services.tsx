import { Container } from "@/components/shared/container";
import { Separator } from "@/components/ui/separator";
import { Gem } from "lucide-react";

const services = [
	"SỬA RÒ RỈ ỐNG NƯỚC, DÒ TÌM ỐNG NƯỚC",
	"SỬA VÒI NƯỚC, BỒN CẦU, LAVABO",
	" VỆ SINH BỒN NƯỚC",
	"LẮP ĐẶT ĐƯỜNG ỐNG NƯỚC, THIẾT BỊ VỆ SINH",
	,
	"DỊCH VỤ SỬA CHỮA HỆ THỐNG NƯỚC TRONG SINH HOẠT",
	,
	"LẮP ĐỒNG HỒ KIỂM ĐỊNH 1P,3P",
	,
	"LẮP ĐẶT MÁY BƠM, SỬA MÁY BƠM",
];

export const Services = () => {
	return (
		<div className="mt-5">
			<Container
				innerClassName="flex flex-col items-center"
				className="bg-yellow-50 py-5"
			>
				<h2 className="md:text-3xl text-xl max-w-[900px] px-10 text-center font-semibold text-yellow-400 drop-shadow-md uppercase">
					HomeServices LÀ DỊCH VỤ SỬA NƯỚC SỐ 1 VIỆT NAM
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

import { Container } from "@/components/shared/container";
import { Separator } from "@/components/ui/separator";
import { Gem } from "lucide-react";

const services = [
	"HÚT HẦM CẦU, BỂ PHỐT",
	"THÔNG TẮC THOÁT SÀN, ỐNG THOÁT NƯỚC THẢI",
	"THÔNG NGHẸT WC, BỒN CẦU, LAVABO, CHẬU RỬA CHÉN,…",
	"SỬA BỒN CẦU BỊ TẮC TẠI NHÀ – SỬA BỒN CẦU BỊ NGHẸT GIÁ RẺ",
	"THÔNG CỐNG NGHẸT GIÁ RẺ TẠI NHÀ TPHCM",
];

export const Services = () => {
	return (
		<div className="mt-5">
			<Container
				innerClassName="flex flex-col items-center"
				className="bg-yellow-50 py-5"
			>
				<h2 className="md:text-3xl text-xl max-w-[900px] px-10 text-center font-semibold text-yellow-400 drop-shadow-md uppercase">
					Home Services DỊCH VỤ SỬA CHỬA ĐIỆN, NƯỚC, THÔNG NGHẸT, CHỐNG THẤM
					CHUYÊN NGHIỆP NHẤT TẠI NHÀ SỐ 1 VIỆT NAM
				</h2>
				<div className="bg-red-400 w-full max-w-[500px] p-5 mt-5">
					<div className="bg-red-500 text-white font-semibold text-center p-2 mb-3">
						CÁC DANH MỤC CHỐNG THẤM
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

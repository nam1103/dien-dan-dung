import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/shared/container";

export const Introduction = () => {
	return (
		<Container>
			<div className="w-full flex md:flex-row flex-col  gap-x-6 gap-y-10 px-7 md:px-10 lg:px-14 xl:px-20 py-10">
				<div className="flex-1">
					<p className="text-xl italic font-light">Giới thiệu về</p>
					<div className="flex items-center gap-x-2">
						<h1 className="text-4xl text-red-500 font-semibold font-mono -ml-1 drop-shadow-md">
							ServiceHome
						</h1>
						<div className="border-b-[1px] flex-1 h-0 border-neutral-700" />
					</div>
					<div className="font-light mt-5">
						<p>ServiceHome là dịch vụ sửa điện nước uy tín hàng đầu Việt Nam</p>
						<p className="mt-2">
							Đội ngũ làm việc giàu kinh nghiệm, tham gia vào hàng trăm dự án
							cao cấp.
						</p>
					</div>
					<Link href="/gioi-thieu">
						<Button variant="destructive" className=" mt-5 shadow-md">
							Xem thêm
						</Button>
					</Link>
				</div>
				<div className="md:flex-1 bg-red-500 relative aspect-[849/564] z-[-1]">
					<Image
						alt=""
						src="/fixing-pipe.jpg"
						fill
						className=" translate-x-3 -translate-y-4"
					/>
				</div>
			</div>
		</Container>
	);
};

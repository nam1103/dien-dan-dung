import { Star } from "lucide-react";
import { RiStarSFill } from "react-icons/ri";
import Image from "next/image";
import { Container } from "@/components/shared/container";

export const CustomerRating = () => {
	return (
		<Container>
			<div className="w-full py-10 px-7 md:px-10 lg:px-14 xl:px-20 space-y-10">
				<div className="relative">
					<div className="border-b"></div>
					<div className="w-fit text-muted-foreground absolute right-1/2 translate-x-1/2 bg-white px-5 top-1/2 -translate-y-1/2 flex items-center gap-x-3">
						<Star className="h-6 w-6" />
						<span className="md:text-xl text-lg truncate uppercase">
							Đánh giá của khách hàng
						</span>
					</div>
				</div>
				<div className="grid md:grid-cols-3 grid-cols-1 gap-x-5 gap-y-5">
					<div className=" bg-neutral- shadow-xl hover:shadow-2xl py-5 transform hover:-translate-y-2 flex-col items-center flex space-y-3 transition-all duration-200">
						<div className="w-32 h-30 h-32 relative">
							<Image src="/user1.jpeg" alt="" fill className="rounded-full" />
						</div>
						<div className="flex">
							<RiStarSFill className="fill-yellow-500 h-6 w-6" />
							<RiStarSFill className="fill-yellow-500 h-6 w-6" />
							<RiStarSFill className="fill-yellow-500 h-6 w-6" />
							<RiStarSFill className="fill-yellow-500 h-6 w-6" />
							<RiStarSFill className="fill-yellow-500 h-6 w-6" />
						</div>
						<p className="italic mx-7 text-center text-sm font-light text-neutral-500">
							Mình hài lòng với dịch vụ của bên Cáo Phúc. Đặc biệt là cách làm
							việc và chăm sóc khách hàng mọi lúc, mọi nơi. Cảm ơn Cáo Phúc!
						</p>

						<h2 className="font-light text-neutral-400">
							<strong className="text-neutral-600 font-semibold">Bạn Vũ</strong>{" "}
							/ Cửa hàng Richard
						</h2>
					</div>
					<div className=" bg-neutral- shadow-xl hover:shadow-2xl py-5 transform hover:-translate-y-2 flex-col items-center flex space-y-3 transition-all duration-200">
						<div className="w-32 h-30 h-32 relative">
							<Image src="/user2.jpeg" alt="" fill className="rounded-full" />
						</div>
						<div className="flex">
							<RiStarSFill className="fill-yellow-500 h-6 w-6" />
							<RiStarSFill className="fill-yellow-500 h-6 w-6" />
							<RiStarSFill className="fill-yellow-500 h-6 w-6" />
							<RiStarSFill className="fill-yellow-500 h-6 w-6" />
							<RiStarSFill className="fill-yellow-500 h-6 w-6" />
						</div>
						<p className="italic mx-7 text-center text-sm font-light text-neutral-500">
							Mấy ngày trước nhà mình cũng bị cúp điện, mất nước, lại nhờ đền
							dịch vụ của Cáo Phúc. Mình ưng cái là mới gọi là có mặt ngay.
						</p>

						<h2 className="font-light text-neutral-400">
							<strong className="text-neutral-600 font-semibold">
								Anh Điền
							</strong>{" "}
							/ Tân Phú
						</h2>
					</div>
					<div className=" bg-neutral- shadow-xl hover:shadow-2xl py-5 transform hover:-translate-y-2 flex-col items-center flex space-y-3 transition-all duration-200">
						<div className="w-32 h-30 h-32 relative">
							<Image src="/user3.jpeg" alt="" fill className="rounded-full" />
						</div>
						<div className="flex">
							<RiStarSFill className="fill-yellow-500 h-6 w-6" />
							<RiStarSFill className="fill-yellow-500 h-6 w-6" />
							<RiStarSFill className="fill-yellow-500 h-6 w-6" />
							<RiStarSFill className="fill-yellow-500 h-6 w-6" />
							<RiStarSFill className="fill-yellow-500 h-6 w-6" />
						</div>
						<p className="italic mx-7 text-center text-sm font-light text-neutral-500">
							Cảm ơn dịch vụ của Cáo Phúc. Giá cả hợp lí, phục vụ tận tình, xứng
							đáng 5 sao!
						</p>

						<h2 className="font-light text-neutral-400">
							<strong className="text-neutral-600 font-semibold">
								Chị Mai
							</strong>{" "}
							/ Quận 12
						</h2>
					</div>
				</div>
			</div>
		</Container>
	);
};

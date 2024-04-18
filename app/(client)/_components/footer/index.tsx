import { Container } from "@/components/shared/container";
import { InfoSection } from "./info";
import { Services } from "./services";
import { Contact } from "./contact";
import { getCategories } from "@/lib/category-service";
import { Addresses } from "./addresses";

export const Footer = async () => {
	const categories = await getCategories();

	return (
		<div className="w-full bg-orange-900 border-t border-t-red-500 bottom-0">
			<Container innerClassName="max-w-[1400px]">
				<div className="grid sm:grid-cols-12 py-5 grid-cols-1 gap-4 px-7 md:px-12 lg:px-16 ">
					<InfoSection />
					<Services categories={categories.slice(0, 10)} />
					<Contact />
					<Addresses />
				</div>
				<p className=" sm:-mt-20 w-full text-sm text-white px-7 md:px-12 lg:px-16 sm:pb-36 pb-10 max-w-[600px]">
					©Copyright 2023 Home Services | Dịch Vụ Sửa Chữa Điện Nước Số 1 Cho
					Ngôi Nhà Bạn!
				</p>
			</Container>
		</div>
	);
};

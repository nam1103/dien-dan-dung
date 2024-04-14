import { Container } from "@/components/shared/container";
import { InfoSection } from "./info";
import { Services } from "./services";
import { Contact } from "./contact";
import { getCategories } from "@/lib/category-service";

export const Footer = async () => {
	const categories = await getCategories();

	return (
		<div className="w-full bg-orange-900 border-t border-t-red-500 bottom-0">
			<Container>
				<div className="grid sm:grid-cols-7 py-5 grid-cols-1 gap-4 px-7 md:px-12 lg:px-20 xl:px-28">
					<InfoSection />
					<Services categories={categories.slice(0, 10)} />
					<Contact />
				</div>
				<p className="-mt-5 text-sm text-white px-7 md:px-12 lg:px-20 xl:px-28 pb-8">
					©Copyright 2024 Home Services | Dịch Vụ Sửa Chữa Số 1 Cho Ngôi Nhà
					Bạn!
				</p>
			</Container>
		</div>
	);
};

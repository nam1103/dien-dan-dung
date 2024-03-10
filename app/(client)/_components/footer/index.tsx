import { Container } from "@/components/shared/container";
import { InfoSection } from "./info";

export const Footer = () => {
	return (
		<div className="w-full bg-orange-900 border-t border-t-red-500">
			<Container>
				<div className="grid sm:grid-cols-7 py-5 grid-cols-1 gap-4 px-7 md:px-12 lg:px-20 xl:px-28">
					<InfoSection />
					<div className="col-span-2">1fr</div>
					<div className="col-span-2">1fr</div>
				</div>
			</Container>
		</div>
	);
};

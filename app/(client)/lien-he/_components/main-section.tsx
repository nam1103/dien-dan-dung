import dynamic from "next/dynamic";
import { Contact } from "./contact";

const Map = dynamic(() => import("./map"), { ssr: false });

export const MainSection = () => {
	return (
		<main className="px-7 md:px-10 lg:px-14 xl:px-20 pb-20 flex flex-col md:flex-row gap-x-5 gap-y-5">
			<Contact />
			<div className="flex-1 aspect-square">
				<Map />
			</div>
		</main>
	);
};

import { appInfo, contactInfo } from "@/constants";
import { Logo } from "./logo";

import { RouteList } from "./route-list";
import { Header } from "./header";

export const Navbar = () => {
	return (
		<div className="w-full flex flex-col">
			<Header />
			<RouteList />
		</div>
	);
};

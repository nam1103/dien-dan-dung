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

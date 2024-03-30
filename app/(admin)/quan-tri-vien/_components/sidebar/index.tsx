import { Header } from "./header";
import { LogoutButton } from "./logout-button";
import { RouteList } from "./route-list";

export const Sidebar = () => {
	return (
		<aside className="fixed hidden lg:flex flex-col h-full w-52 bg-neutral-100">
			<Header />
			<RouteList />
			<LogoutButton />
		</aside>
	);
};

export const MobileSidebar = () => {
	return (
		<aside className="w-full h-full flex flex-col bg-neutral-100">
			<Header />
			<RouteList />
			<LogoutButton />
		</aside>
	);
};

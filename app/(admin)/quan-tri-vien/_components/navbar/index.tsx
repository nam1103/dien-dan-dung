import { MenuSidebar } from "./menu-sidebar";
import { Notification } from "./notification";

export const Navbar = () => {
	return (
		<nav className="fixed z-30 lg:left-52 bg-neutral-100 h-16 shadow-md w-full flex items-center gap-5 px-5">
			<MenuSidebar />
			<h1 className="font-semibold uppercase text-muted-foreground text-2xl">
				Quản lí Home Services
			</h1>
			<Notification />
		</nav>
	);
};

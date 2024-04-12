import { Separator } from "@/components/ui/separator";
import { getUserData } from "@/lib/user-service";

export const Header = async () => {
	const user = await getUserData();

	return (
		<div className="w-full py-7 space-y-2">
			<h1 className="text-neutral-800 text-4xl font-semibold break-all">
				Chào mừng {user?.email}
			</h1>
			<Separator className="w-full border-2" />
		</div>
	);
};

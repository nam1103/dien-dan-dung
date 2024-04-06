import { auth } from "@/auth";
import { Separator } from "@/components/ui/separator";

export const Header = async () => {
	const session = await auth()!;

	return (
		<div className="w-full py-7 space-y-2">
			<h1 className="text-neutral-800 text-4xl font-semibold break-all">
				Chào mừng {session?.user.email}
			</h1>
			<Separator className="w-full border-2" />
		</div>
	);
};

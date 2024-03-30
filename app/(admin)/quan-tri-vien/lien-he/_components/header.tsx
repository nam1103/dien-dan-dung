import { Separator } from "@/components/ui/separator";

export const Header = () => {
	return (
		<div className="w-full py-7 space-y-2">
			<h1 className="text-neutral-800 text-4xl font-semibold">
				Liên Hệ Của Khách Hàng
			</h1>
			<Separator className="w-full border-2" />
		</div>
	);
};

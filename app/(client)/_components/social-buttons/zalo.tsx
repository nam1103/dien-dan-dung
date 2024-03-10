import { contactInfo } from "@/constants";
import Image from "next/image";

export const Zalo = () => {
	const openZalo = () => {
		// Replace "zalo://addphone?phone=123456789" with the appropriate deep link for adding a phone number to Zalo
		window.location.href = `https://zalo.me/${contactInfo.zalo.replaceAll(
			".",
			""
		)}`;
	};

	return (
		<div className="rounded-full p-2 w-fit h-fit bg-blue-400/80 animate-aura cursor-pointer z-[30]">
			<div
				className="bg-blue-500 w-fit h-fit rounded-full p-3 animate-shake"
				onClick={openZalo}
			>
				<Image alt="Zalo" src="/zalo.png" width={25} height={25} />
			</div>
		</div>
	);
};

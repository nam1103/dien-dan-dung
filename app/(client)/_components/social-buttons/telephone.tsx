import { contactInfo } from "@/constants";
import { FaPhoneAlt } from "react-icons/fa";

export const Telephone = () => {
	const handleCall = () => {
		window.location.href = `tel:${contactInfo.hotline.replaceAll(".", "")}`;
	};

	return (
		<div className="rounded-full w-fit h-fit p-2 bg-red-400/80 animate-aura cursor-pointer z-[30p]">
			<div
				className="bg-red-500 w-fit h-fit p-3 rounded-full animate-shake"
				onClick={handleCall}
			>
				<FaPhoneAlt className="w-6 h-6 fill-white" />
			</div>
		</div>
	);
};

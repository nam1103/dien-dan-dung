import Image from "next/image";

export const Hero = () => {
	return (
		<div className="w-full aspect-video max-h-[500px] bg-center relative mb-5">
			<Image src="/hero-2.png" alt="" fill className="object-cover" />
		</div>
	);
};

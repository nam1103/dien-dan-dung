import Image from "next/image";

export const Hero = () => {
	return (
		<div className="w-full aspect-video max-h-[500px] bg-center relative mb-5 bg-black">
			<Image src="/hero-6.jpg" alt="" fill className="object-contain" />
		</div>
	);
};

import Image from "next/image";

export const Hero = () => {
	return (
		<div className="relative w-full aspect-[1200/500]">
			<Image alt="hero" src="/hero.png" fill className=" object-fill z-[-1]" />
		</div>
	);
};

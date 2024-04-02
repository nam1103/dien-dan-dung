import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Image } from "lucide-react";
import { useEffect, useState } from "react";

interface ImageSliderProps {
	imageUrls: string[];
}

export const ImageSlider = ({ imageUrls }: ImageSliderProps) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
		);
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
		);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) =>
				prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
			);
		}, 5000);

		return () => clearInterval(interval);
	}, [imageUrls.length]); //

	if (!imageUrls.length) {
		return (
			<div className="sm:w-[600px] w-full aspect-video gap-x-4 flex items-center  bg-neutral-100 rounded-lg justify-center">
				<Image className="h-5 w-5" />
				<p className="font-semibold text-sm">Chưa thêm ảnh</p>
			</div>
		);
	}

	return (
		<div className="relative sm:w-[600px] aspect-video w-full bg-neutral-800 p-5 rounded-lg">
			<div className="flex overflow-hidden w-full h-full ">
				{imageUrls.map((image, index) => (
					<div
						key={index}
						className="w-full shrink-0 relative transition-transform ease duration-300"
						style={{ transform: `translateX(-${currentIndex * 100}%)` }}
					>
						<img
							src={image}
							alt={`Slide ${currentIndex}`}
							className="w-full h-full object-contain"
						/>
					</div>
				))}
			</div>
			{imageUrls.length >= 2 && (
				<>
					<Button
						onClick={nextSlide}
						variant="outline"
						size="icon"
						className="top-1/2 transform -translate-y-1/2 absolute p-5 right-5"
					>
						<ArrowRight className="h-6 w-6 shrink-0" />
					</Button>
					<Button
						onClick={prevSlide}
						variant="outline"
						size="icon"
						className="top-1/2 transform -translate-y-1/2 absolute p-5 left-5"
					>
						<ArrowLeft className="h-6 w-6 shrink-0" />
					</Button>
				</>
			)}
		</div>
	);
};

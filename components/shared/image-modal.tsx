import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import Image from "next/image";
import { PlusCircle } from "lucide-react";

interface ImageModalProps {
	src: string;
	className?: string;
	containerClassName?: string;
}

export const ImageModal = ({
	src,
	className,
	containerClassName,
}: ImageModalProps) => {
	return (
		<Dialog>
			<DialogTrigger>
				<div className={cn("relative group", className)}>
					<Image src={src} alt="" fill />

					<div className="hidden absolute inset-0 group-hover:bg-white/50 transition-colors group-hover:flex items-center justify-center">
						<PlusCircle className="h-20 w-20 text-white stroke-[2px] hover:transform hover:rotate-180 transition-transform duration-500" />
					</div>
				</div>
			</DialogTrigger>
			<DialogContent className="p-0">
				<div className={cn("w-full relative", containerClassName)}>
					<Image src={src} alt="" fill className="object-contain" />
				</div>
			</DialogContent>
		</Dialog>
	);
};

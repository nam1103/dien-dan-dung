"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ImagePlus, Loader2, Trash } from "lucide-react";
import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary";

interface ImageUploadProps {
	disabled?: boolean;
	onChange: (value: string) => void;
	onRemove: (value: string) => void;
	value: string[];
}

const ImageUpload: React.FC<ImageUploadProps> = ({
	onChange,
	onRemove,
	disabled,
	value,
}) => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const onUpload = (result: any) => {
		onChange(result.info.secure_url);
	};

	if (!isMounted) {
		return (
			<Button variant="secondary" className="block px-14">
				<Loader2 className="h-6 w-6 animate-spin" />
			</Button>
		);
	}

	return (
		<div className="space-y-2">
			<div className="grid w-full sm:grid-cols-4 grid-cols-2 gap-10">
				{value.map((url) => (
					<div
						key={url}
						className="relative w-[150px] h-[150px] rounded-md overflow-hidden"
					>
						<div className="z-10 absolute top-2 right-2">
							<Button
								variant="destructive"
								size="icon"
								className="z-20"
								type="button"
								onClick={() => onRemove(url)}
							>
								<Trash className="w-4 h-4" />
							</Button>
						</div>
						<Image fill src={url} alt="Image" className="-z-1" />
					</div>
				))}
			</div>
			<CldUploadWidget onUpload={onUpload} uploadPreset="ecommerce-preset">
				{({ open }) => {
					const onClick = () => {
						open();
					};

					return (
						<Button
							type="button"
							disabled={disabled}
							variant="secondary"
							onClick={onClick}
						>
							<ImagePlus className="h-4 w-4 mr-2" />
							Tải Ảnh Lên
						</Button>
					);
				}}
			</CldUploadWidget>
		</div>
	);
};

export default ImageUpload;

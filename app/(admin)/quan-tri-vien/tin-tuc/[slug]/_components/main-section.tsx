"use client";

import { PostWithCommentAndRatings } from "@/types";
import { useEffect, useState } from "react";
import { ModeSwitcher } from "./mode-switcher";
import { useSearchParams } from "next/navigation";
import { ChangePostForm } from "./change-post-form";
import { PostInfo } from "./post-info";

interface MainSectionProps {
	data: PostWithCommentAndRatings;
}

export enum Mode {
	INFO,
	CHANGE,
}

export const MainSection = ({ data }: MainSectionProps) => {
	const [mode, setMode] = useState<Mode>(Mode.INFO);
	const searchParams = useSearchParams();

	useEffect(() => {
		if (searchParams.get("edit")) {
			setMode(Mode.CHANGE);
		}
	}, []);

	return (
		<div className="w-full space-y-6">
			<ModeSwitcher mode={mode} setMode={setMode} />
			{mode === Mode.INFO ? (
				<PostInfo data={data} />
			) : (
				<ChangePostForm data={data} />
			)}
		</div>
	);
};

"use client";

import { Button } from "@/components/ui/button";
import { Loader2, Menu } from "lucide-react";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { ImageSlider } from "./image-slider";
import { CommentForm } from "./comment-form";

interface PostContentProps {
	content: string;
	imageUrls: string[];
	postId: string;
}

const RichTextEditor = dynamic(
	() => import("@/components/shared/rich-text-editor"),
	{
		loading: () => {
			return (
				<div className="h-[400px] flex items-center justify-center rounded-lg bg-slate-100">
					<Loader2 className="h-10 w-10 animate-spin" />
				</div>
			);
		},
		ssr: false,
	}
);

interface TableOfContentsItem {
	text: string;
	id: string;
	level: number;
}

export const PostContent = ({
	content,
	imageUrls,
	postId,
}: PostContentProps) => {
	const [tableOfContents, setTableOfContents] = useState<TableOfContentsItem[]>(
		[]
	);

	const [showToc, setShowToc] = useState(true);

	const editorRef = useRef(null);

	const generateUniqueID = (text: string) => {
		return text
			.toLowerCase()
			.replace(/\s+/g, "-") // Replace spaces with hyphens
			.replace(/[^\w-]+/g, "") // Remove non-word characters
			.replace(/--+/g, "-") // Replace multiple hyphens with single hyphen
			.substring(0, 20); // Limit to 20 characters to avoid long IDs
	};

	const onToggleToc = () => {
		setShowToc((prev) => !prev);
	};

	useEffect(() => {
		const parser = new DOMParser();

		const doc = parser.parseFromString(content, "text/html");
		const headings = Array.from(doc.querySelectorAll("h1, h2, h3, h4, h5, h6"));
		const toc = headings.map((heading) => {
			const headingId =
				heading.getAttribute("id") ||
				generateUniqueID(heading.textContent || "");

			heading.setAttribute("id", headingId);

			return {
				text: heading.textContent || "",
				id: headingId,
				level: parseInt(heading.tagName[1]),
			};
		});

		const updatedHtml = doc.documentElement.outerHTML;

		console.log(updatedHtml);

		setTableOfContents(toc);
	}, [content]);

	return (
		<div className="space-y-6">
			<div className="p-3 border-black border-[1px] shadow-md bg-neutral-50 rounded-lg max-w-[400px]">
				<div className="flex justify-between items-center">
					<h1 className="font-semibold text-xl">Bảng Nội Dung</h1>
					<Button size="icon" variant="outline" onClick={onToggleToc}>
						<Menu />
					</Button>
				</div>
				{showToc && (
					<ul className="mt-2">
						{tableOfContents.map((item, index) => (
							<li
								key={item.id}
								style={{ paddingLeft: `${(item.level - 1) * 20}px` }}
							>
								<p className="cursor-pointer hover:underline font-light break-all">
									{`${index + 1}. ${item.text}`}
								</p>
							</li>
						))}
					</ul>
				)}
			</div>

			<ImageSlider imageUrls={imageUrls} />

			<RichTextEditor value={content} preview />

			<CommentForm postId={postId} />
		</div>
	);
};

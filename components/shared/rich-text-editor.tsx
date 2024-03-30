"use client";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import { cn } from "@/lib/utils";
import { ChangeEvent } from "react";

interface RichTextEditorProps {
	value: string;
	preview?: boolean;
	onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
	className?: string;
}

const RichTextEditor = ({
	value,
	preview,
	onChange,
	className,
}: RichTextEditorProps) => {
	return (
		<div className={(cn(className), "mb-11")}>
			{!preview ? (
				<ReactQuill
					value={value}
					// @ts-ignore
					onChange={onChange}
					style={{ height: "400px" }}
				/>
			) : (
				<ReactQuill className="preview" theme="bubble" value={value} readOnly />
			)}
		</div>
	);
};

export default RichTextEditor;

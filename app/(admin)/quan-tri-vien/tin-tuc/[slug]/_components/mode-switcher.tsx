import { cn } from "@/lib/utils";
import { Mode } from "./main-section";

interface ModeSwitcherProps {
	mode: Mode;
	setMode: (mode: Mode) => void;
}

export const ModeSwitcher = ({ mode, setMode }: ModeSwitcherProps) => {
	return (
		<div className="w-full max-w-[400px] grid grid-cols-2">
			<div
				className={cn(
					"border-b-2 border-background p-2 text-center select-none font-semibold hover:bg-neutral-200 transition cursor-pointer",
					mode === Mode.INFO && "border-blue-500"
				)}
				onClick={() => setMode(Mode.INFO)}
			>
				Thông Tin
			</div>
			<div
				className={cn(
					"border-b-2 border-background p-2 text-center select-none font-semibold hover:bg-neutral-200 transition cursor-pointer",
					mode === Mode.CHANGE && "border-blue-500"
				)}
				onClick={() => setMode(Mode.CHANGE)}
			>
				Chỉnh Sữa
			</div>
		</div>
	);
};

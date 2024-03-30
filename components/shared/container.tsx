import { cn } from "@/lib/utils";

interface ContainerProps {
	children: React.ReactNode;
	className?: string;
	innerClassName?: string;
}

export const Container = ({
	children,
	className,
	innerClassName,
}: ContainerProps) => {
	return (
		<div className={cn("w-full", className)}>
			<div className={cn("max-w-[1200px] mx-auto", innerClassName)}>
				{children}
			</div>
		</div>
	);
};

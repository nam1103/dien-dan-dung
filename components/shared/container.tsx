interface ContainerProps {
	children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
	return <div className=" max-w-[1200px] mx-auto">{children}</div>;
};

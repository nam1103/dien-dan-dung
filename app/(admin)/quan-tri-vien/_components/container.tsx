interface ContainerProps {
	children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
	return <div className="lg:pl-52 pt-16">{children}</div>;
};

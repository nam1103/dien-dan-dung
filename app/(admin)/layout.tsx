interface AdminLayoutProps {
	children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
	return <div className="h-full">{children}</div>;
};

export default AdminLayout;

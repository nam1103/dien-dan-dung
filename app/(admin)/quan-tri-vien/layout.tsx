import { Container } from "./_components/container";
import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";

interface AdminLayoutProps {
	children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
	return (
		<div className="h-full bg-background">
			<Navbar />
			<Sidebar />
			<Container>{children}</Container>
		</div>
	);
};

export default AdminLayout;

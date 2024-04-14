import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";
import { ScrollBackButton } from "./_components/scroll-back-button";
import { SocialButtons } from "./_components/social-buttons";

interface ClientLayoutProps {
	children: React.ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
	return (
		<div className="h-full w-full overflow-x-hidden">
			<SocialButtons />
			<ScrollBackButton />
			<Navbar />
			<div>{children}</div>
			<Footer />
		</div>
	);
};

export default ClientLayout;

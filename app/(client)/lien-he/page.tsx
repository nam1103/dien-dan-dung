import { Container } from "@/components/shared/container";
import { Header } from "./_components/header";
import { MainSection } from "./_components/main-section";

const LienHePage = () => {
	return (
		<div className="h-full">
			<Container>
				<Header />
				<MainSection />
			</Container>
		</div>
	);
};

export default LienHePage;

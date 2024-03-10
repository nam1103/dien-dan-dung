import { Contact } from "./_components/contact";
import { CustomerRating } from "./_components/customer-ratings";
import { Hero } from "./_components/hero";
import { Introduction } from "./_components/introduction";
import { Container } from "@/components/shared/container";

const ClientPage = () => {
	return (
		<div className="h-full">
			<Hero />
			<Container>
				<Introduction />
				<CustomerRating />
				<Contact />
			</Container>
		</div>
	);
};

export default ClientPage;

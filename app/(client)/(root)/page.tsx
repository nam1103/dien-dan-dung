import { Contact } from "./_components/contact";
import { CustomerRating } from "./_components/customer-ratings";
import { Hero } from "./_components/hero";
import { Introduction } from "./_components/introduction";

import { ReasonForChoosing } from "./_components/reason-for-choosing";

const ClientPage = () => {
	return (
		<div className="h-full">
			<Hero />
			<Introduction />
			<ReasonForChoosing />
			<CustomerRating />
			<Contact />
		</div>
	);
};

export default ClientPage;

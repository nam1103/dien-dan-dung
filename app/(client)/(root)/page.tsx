import { Contact } from "./_components/contact";
import { CustomerRating } from "./_components/customer-ratings";
import { Hero } from "./_components/hero";
import { Introduction } from "./_components/introduction";

import { ReasonForChoosing } from "./_components/reason-for-choosing";
import { Registering } from "./_components/registering";
import { Services } from "./_components/services";

const ClientPage = () => {
	return (
		<div className="h-full">
			<Hero />
			<Introduction />
			<Services />
			<ReasonForChoosing />
			<CustomerRating />
			<Contact />
			<Registering />
		</div>
	);
};

export default ClientPage;

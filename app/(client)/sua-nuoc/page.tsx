import { Commitment } from "./_components/commitment";
import { Hero } from "./_components/hero";
import { ReasonForChoosing } from "./_components/reason-for-choosing";
import { Services } from "./_components/services";

const SuaNuocPage = () => {
	return (
		<div className="w-full">
			<Hero />
			<ReasonForChoosing />
			<Services />
			<Commitment />
		</div>
	);
};

export default SuaNuocPage;

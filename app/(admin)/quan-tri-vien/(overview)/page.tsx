import { ContactCard } from "./_components/contact-card";
import { Header } from "./_components/header";
import { HomeCard } from "./_components/home-card";
import { PostCard } from "./_components/post-card";

const OverviewPage = () => {
	return (
		<div className="lg:px-14 md:px-10 sm:px-7 px-5 max-w-[700px] pb-20">
			<Header />
			<div className="grid sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-5">
				<ContactCard />
				<PostCard />
				<HomeCard />
			</div>
		</div>
	);
};

export default OverviewPage;

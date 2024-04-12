import { Header } from "./_components/header";
import { EmailSettingsSection } from "./_components/email-section";
import { AccountInfoSection } from "./_components/account-info-section";
import { getUserData } from "@/lib/user-service";

const SettingsPage = async () => {
	const user = await getUserData();

	return (
		<div className="lg:px-14 md:px-10 sm:px-7 px-5 max-w-[700px] pb-20">
			<Header />
			<EmailSettingsSection user={user!} />

			<AccountInfoSection user={user!} />
		</div>
	);
};

export default SettingsPage;

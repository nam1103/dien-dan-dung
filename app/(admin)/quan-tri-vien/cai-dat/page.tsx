import { auth } from "@/auth";
import { Header } from "./_components/header";
import { EmailSettingsSection } from "./_components/email-section";
import { AccountInfoSection } from "./_components/account-info-section";

const SettingsPage = async () => {
	const session = await auth();

	return (
		<div className="lg:px-14 md:px-10 sm:px-7 px-5 max-w-[700px] pb-20">
			<Header />
			<EmailSettingsSection user={session?.user!} />

			<AccountInfoSection user={session?.user!} />
		</div>
	);
};

export default SettingsPage;

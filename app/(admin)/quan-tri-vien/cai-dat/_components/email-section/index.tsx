import { User } from "@prisma/client";
import { EmailSettingsForm } from "./form";

interface EmailSettingsSectionProps {
	user: User;
}

export const EmailSettingsSection = ({ user }: EmailSettingsSectionProps) => {
	return (
		<div>
			<h2 className="text-3xl text-neutral-700 font-semibold">
				Thông Báo Email
			</h2>
			<EmailSettingsForm user={user} />
		</div>
	);
};

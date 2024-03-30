import { Separator } from "@/components/ui/separator";
import { User } from "@prisma/client";
import { ChangeEmailForm } from "./change-email-form";
import { DeleteAccount } from "./delete-account";
import { ChangePassword } from "./change-password-form";

interface AccountInfoSectionProps {
	user: User;
}

export const AccountInfoSection = ({ user }: AccountInfoSectionProps) => {
	return (
		<div className="py-5">
			<Separator className="w-full border-2" />
			<h2 className="text-3xl text-neutral-700 font-semibold mt-8">
				Thông Tin Tài Khoản
			</h2>
			<ChangeEmailForm user={user} />
			<ChangePassword user={user} />
			<DeleteAccount user={user} />
		</div>
	);
};

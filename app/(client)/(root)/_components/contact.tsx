import { Mail } from "lucide-react";
import { ContactForm } from "../../_components/shared/contact-form";
import { Container } from "@/components/shared/container";

export const Contact = () => {
	return (
		<Container>
			<div className="w-full py-10 px-7 md:px-10 lg:px-14 xl:px-20 space-y-10">
				<div className="relative">
					<div className="border-b"></div>
					<div className="w-fit text-muted-foreground absolute right-1/2 translate-x-1/2 bg-white px-5 top-1/2 -translate-y-1/2 flex items-center gap-x-3">
						<Mail className="h-6 w-6" />
						<span className="md:text-xl text-lg truncate uppercase">
							Liên hệ với Điện Dân Dụng HomeServices
						</span>
					</div>
				</div>
				<ContactForm />
			</div>
		</Container>
	);
};

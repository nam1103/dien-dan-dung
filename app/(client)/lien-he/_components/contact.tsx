import { addresses, contactInfo } from "@/constants";
import { ContactForm } from "../../_components/shared/contact-form";

export const Contact = () => {
	return (
		<div className="flex-1 space-y-4">
			<h1 className="uppercase md:text-2xl text-xl font-medium text-neutral-800">
				Điện dân dụng cáo phúc
			</h1>
			<ul className="list-disc text-red-500 ml-4 space-y-2 text-lg">
				<li>Hotline: {contactInfo.hotline}</li>
				<li>Hotline dự phòng: {contactInfo.secondary}</li>
				<li>Trụ sở TP.HCM: {addresses.office}</li>
			</ul>
			<ContactForm />
		</div>
	);
};

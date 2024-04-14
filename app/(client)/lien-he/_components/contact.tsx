import { addresses, contactInfo } from "@/constants";
import { ContactForm } from "../../_components/shared/contact-form";

export const Contact = () => {
	return (
		<div className="flex-1 space-y-4">
			<h1 className="uppercase md:text-2xl text-xl font-medium text-neutral-800">
				Điện dân dụng Home Services
			</h1>
			<ul className="list-disc text-red-500 ml-4">
				<li>
					<strong>Hotline</strong>: {contactInfo.hotline}
				</li>
				<li>
					<strong>Hotline dự phòng</strong>: {contactInfo.secondary}
				</li>
				<li>
					<strong>Trụ sở TP.HCM</strong>: {addresses.office}
				</li>
				{addresses.brands.map((address, index) => (
					<li
						key={address}
						className="break-before-avoid text-sm break-after-avoid"
					>
						<strong>CN{index + 1}</strong>: {address}
					</li>
				))}
			</ul>
			<ContactForm />
		</div>
	);
};

import { addresses } from "@/constants";

export const Addresses = () => {
	return (
		<div className="col-span-3">
			<div className="flex gap-x-2 mb-3">
				<div className="border-l-4 border-l-orange-500" />
				<h2 className="uppercase text-lg text-white">Liên hệ tư vấn</h2>
			</div>

			{addresses.brands.map((address, index) => (
				<p className="text-white text-sm break-before-avoid break-after-avoid">
					<strong className="text-orange-500">CN{index + 1}</strong>: {address}
				</p>
			))}
		</div>
	);
};

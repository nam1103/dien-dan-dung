"use client";

import { Telephone } from "./telephone";
import { Zalo } from "./zalo";

export const SocialButtons = () => {
	return (
		<div className="fixed bottom-5 left-1 space-y-3 z-[30]">
			<Telephone />
			<Zalo />
		</div>
	);
};

import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

export const Notification = () => {
	return (
		<Button variant="outline" size="icon" className="ml-auto">
			<Bell className="text-muted-foreground" />
		</Button>
	);
};

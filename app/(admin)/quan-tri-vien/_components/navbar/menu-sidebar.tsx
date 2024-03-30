import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { MobileSidebar } from "../sidebar";

export const MenuSidebar = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline" size="icon" className="lg:hidden">
					<Menu className="h-7 w-7 text-muted-foreground" />
				</Button>
			</SheetTrigger>

			<SheetContent side="left" className="p-0 w-[300px]">
				<MobileSidebar />
			</SheetContent>
		</Sheet>
	);
};

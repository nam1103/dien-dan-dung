import { getContacts } from "@/lib/contact-service";
import { Header } from "./_components/header";
import { Actions } from "./_components/actions";
import { ContactList } from "./_components/contact-list";

interface AdminContactPageProps {
	searchParams: {
		order?: "asc" | "desc";
		username?: string;
	};
}

const AdminContactPage = async ({ searchParams }: AdminContactPageProps) => {
	const data = await getContacts(searchParams.order, searchParams.username);

	return (
		<div className="lg:px-14 md:px-10 sm:px-7 px-5 max-w-[700px] pb-20">
			<Header />
			<Actions />
			<ContactList data={data} />
		</div>
	);
};

export default AdminContactPage;

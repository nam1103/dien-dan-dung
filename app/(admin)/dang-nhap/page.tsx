import { LoginForm } from "./_components/login-form";

const AdminLoginPage = () => {
	return (
		<div className="h-full bg-[url('/login-hero.jpeg')] bg-cover bg-center flex justify-center items-center">
			<LoginForm />
		</div>
	);
};

export default AdminLoginPage;

import { Link } from "react-router";
import ThemeToggle from "../theme/ThemeToggle.jsx";
import Navbar from "./NavBar.jsx";
import { useLogin } from "../login/useLogin.js";
import LoginLink from "../login/LoginLink.jsx";
import UserDropdown from "./UserDropdown.jsx";

export default function Header({ pages }) {
	const {authenticated} = useLogin();

	return (

		<header className="w-full md:grid md:grid-cols-12 md:gap-1 flex flex-col gap-2 text-center bg-primary text-text pb-2">
			<div className="md:col-span-2 md:w-full w-3/4 m-auto">
				<img className="" src="/src/assets/blogLogo.svg" alt="logo of backcountry brookies" />
			</div>
			<div className="md:col-span-4">
				
			</div>
			<div className="md:col-span-4 content-center">
				<Navbar pages={pages} />
			</div>

			<div className="md:col-span-2 w-3/4 m-auto">
				{/*
				<ThemeToggle />
				*/}
				<UserDropdown />
				
			</div>
		


		</header>
	)
}

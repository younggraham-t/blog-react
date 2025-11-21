import Navbar from "./NavBar.jsx";
import UserDropdown from "./UserDropdown.jsx";
import logo from "../../assets/blogLogo.svg"

export default function Header({ pages }) {

	return (

		<header className="w-full md:grid md:grid-cols-12 md:gap-1 flex flex-col gap-2 text-center bg-primary text-text pb-2">
			<div className="md:col-span-2 md:w-full w-3/4 m-auto">
				<img className="" src={logo} alt="logo of backcountry brookies" />
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

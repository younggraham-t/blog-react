import ThemeToggle from "../theme/ThemeToggle.jsx";
import Navbar from "./NavBar.jsx";

export default function Header({ pages }) {

	return (

		<header className="w-full md:grid md:grid-cols-12 md:gap-1 text-center bg-primary text-text pb-2">
			<div className="md:col-span-2 md:w-full w-3/4 m-auto">
				<img className="" src="/src/assets/blogLogo.svg" alt="logo of backcountry brookies" />
			</div>
			<div className="md:col-span-5">
				
			</div>
			<div className="md:col-span-4 content-center">
				<Navbar pages={pages} />
			</div>

			<div className="md:col-span-1 content-center justify-center">
				{/*
				<ThemeToggle />
				*/}
				
			</div>


		</header>
	)
}

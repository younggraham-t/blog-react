import ThemeToggle from "../theme/ThemeToggle.jsx";
import Navbar from "./NavBar.jsx";

export default function Header({ pages }) {

	return (

		<header className="w-full grid grid-cols-12 gap-1 text-center bg-primary text-text">
			<div className="col-span-2">
				<img className="" src="/src/assets/blogLogo.svg" alt="logo of backcountry brookies" />
			</div>
			<div className="col-span-5">
				
			</div>
			<div className="col-span-4 content-center">
				<Navbar pages={pages} />
			</div>

			<div className="col-span-1 content-center justify-center">
				{/*
				<ThemeToggle />
				*/}
				
			</div>


		</header>
	)
}

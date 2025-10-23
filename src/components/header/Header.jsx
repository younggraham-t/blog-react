import Navbar from "./NavBar.jsx";

export default function Header({navLinks}) {
	
	return (
		<header className="w-full flex flex-col gap-2 text-center">
			<h1 className="text-3xl">My Blog</h1>
			<Navbar pages={navLinks}/>
		</header>
	)
}

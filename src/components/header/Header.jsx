import Navbar from "./NavBar.jsx";

export default function Header({pages}) {
	
	return (
		
		<header className="w-full flex flex-col gap-2 text-center bg-blue-300">
			<h1 className="text-3xl text-gray-950">My Blog</h1>
			<Navbar pages={pages}/>
		</header>
	)
}

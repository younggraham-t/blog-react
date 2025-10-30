import ThemeToggle from "../theme/ThemeToggle.jsx";
import Navbar from "./NavBar.jsx";

export default function Header({pages}) {
	
	return (
		
		<header className="w-full flex flex-col gap-2 text-center text-gray bg-secondary">
			<div className="">
				<h1 className="text-3xl">My Blog</h1>
				<div className="absolute right-2 top-2">
					<ThemeToggle />
					
				</div>
				
			</div>
			<Navbar pages={pages}/>
		
			
		</header>
	)
}

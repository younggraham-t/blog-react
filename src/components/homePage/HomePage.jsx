import { Link } from "react-router/internal/react-server-client";


function HomePage() {
	return (
		<div className="text-justify flex flex-col gap-2">
			<p className="w-3/4 m-auto">Welcome to Backcountry Brookies. This is my blog about my adventures through the backcountry of North Carolina to catch as many Native Brook Char as I can.</p>
			
			
			<div className="w-3/4 m-auto">
				<h2>Why do I call them Char and not Trout?</h2>	
				<h2 className="text-lg">Read my <Link to="/blog" className="text-accent">Blog</Link></h2>
			</div>
		
			<img src="src/assets/Banner.svg" alt="an image of a brook trout"/>
		</div>
	)
}

export default HomePage;

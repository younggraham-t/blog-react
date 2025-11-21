import { Link } from "react-router/internal/react-server-client";


export default function Navbar({pages}) {
	
	return (
		<ul data-testid="nav-bar" className={`grid grid-cols-3`}>
			{pages.map((page, i) => {
				return (
				<li className="col-span-1" key={i}>
					<Link className="text-xl  hover:text-accent active:text-accent"  to={page.link}>{page.name}</Link>
				</li>
					
				)
			})}
		</ul>
	)
}

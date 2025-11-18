import { Link } from "react-router/internal/react-server-client";

export default function Navbar({pages}) {
	return (
		<ul className="w-full flex flex-row justify-around ">
			{pages.map((page, i) => {
				return (
				<li key={i}>
					<Link className="text-xl  hover:text-accent active:text-accent"  to={page.link}>{page.name}</Link>
				</li>
					
				)
			})}
		</ul>
	)
}

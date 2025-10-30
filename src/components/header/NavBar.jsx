import { Link } from "react-router/internal/react-server-client";

export default function Navbar({pages}) {
	return (
		<ul className="w-1/2 flex flex-row justify-around m-auto p-2">
			{pages.map((page, i) => {
				return (
				<li key={i}>
					<Link className="text-xl text-primary  hover:text-accent active:text-accent"  to={page.link}>{page.name}</Link>
				</li>
					
				)
			})}
		</ul>
	)
}

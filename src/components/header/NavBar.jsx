import { Link } from "react-router/internal/react-server-client";

export default function Navbar({pages}) {
	return (
		<ul className="w-1/2 flex flex-row justify-around m-auto p-2">
			{pages.map((page, i) => {
				return (
				<li key={i}>
					<Link className="text-xl text-blue-800 hover:text-blue-500 active:text-blue-900"  to={page.link}>{page.name}</Link>
				</li>
					
				)
			})}
		</ul>
	)
}

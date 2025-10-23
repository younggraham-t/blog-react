
export default function Navbar({pages}) {
	return (
		<ul className="w-1/2 flex flex-row justify-around m-auto">
			{pages.map((page, i) => {
				return (
				<li key={i}>
					<a className="text-xl text-blue-500 hover:text-blue-300 active:text-blue-900"  href={page.link}>{page.name}</a>
				</li>
					
				)
			})}
		</ul>
	)
}


export default function Navbar({pages}) {
	console.log(pages)
	return (
		<ul className="w-1/2 flex flex-row justify-around m-auto">
			{pages.map((page, i) => {
				console.log(page)
				return (
				<li>
					<a className="text-xl text-blue-500 hover:text-blue-300 active:text-blue-900" key={i} href={page.link}>{page.name}</a>
				</li>
					
				)
			})}
		</ul>
	)
}

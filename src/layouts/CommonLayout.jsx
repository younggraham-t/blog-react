import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
import { Outlet } from 'react-router'

export default function CommonLayout({pages}) {
	
	return (
		<div className="flex flex-col h-screen justify-between gap-4">
			<Header pages={pages}/>
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}

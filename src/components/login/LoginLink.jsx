import { useLocation, Link } from "react-router"

function LoginLink({from=false}) {
	
	
	let location = useLocation();
	
	if (!from) {
		//making location null makes the login form use the default redirect after authentication
		location = null;
		
	}
	
	return (
		<Link to="/login" state={{from: location}} >Login</Link>
	)
}

export default LoginLink

import { useState } from "react"
import { useLogin } from "./useLogin.js"
import { dummyLoginData } from "./dummyLogin"
import { useLocation, Navigate } from "react-router"


function LoginForm() {
	const emptyContent = {
		username: "",
		password: "",
	}
	const [content, setContent] = useState(emptyContent)
	const [missingDataError, setMissingDataError] = useState(false)
	const {getAuthentication, authenticated} = useLogin()

	const location = useLocation();
	const from = location.state?.from?.pathname || "/blog"

	const handleSubmit = (event) => {
		event.preventDefault();
		if (content.username === "" || content.password === "") {
			setMissingDataError(true);
			return;
		}

		setMissingDataError(false);
		getAuthentication(content.username, content.password);



	}

	if(authenticated.authenticated) {
		return <Navigate to={from} replace />
	}
	
	return (
		<div className="w-3/4 m-auto flex flex-col gap-2">
			<p>For demonstration purposes here are the allowed users:</p>
			{dummyLoginData.map((user) => {
				
				return <p key={user.username}>username:{user.username} password:{user.password}</p>
			})}
			<form className="flex flex-col gap-2">

				<input
					className=" rounded-md p-1 w-full bg-text text-background opacity-75"
					type="text"
					name="username"
					value={content.username}
					placeholder='Username'
					onChange={e => setContent({ ...content, username: e.target.value })}></input>

				<input
					className=" rounded-md p-1 w-full bg-text text-background opacity-75"
					type="password"
					value={content.password}
					placeholder='Password'
					onChange={e => setContent({ ...content, password: e.target.value })}></input>
				{missingDataError && <p className='text-red-600'>Please enter a comment </p>}
				<button className="p-0.5 w-1/6 rounded-sm text-lg bg-accent text-gray-950 hover:bg-amber-700 active:bg-amber-500" type="submit" onClick={handleSubmit}>Login</button>
			</form>
		</div>
	)
}

export default LoginForm

import React from "react";
import { createContext, useState } from "react";
import { dummyLogin } from "./dummyLogin";

const LoginContext = createContext();
const unAuthenticatedData = {
	username: "",
	authenticated: false,
}

export function LoginProvider({children, initialValue=unAuthenticatedData}) {
	
	const [authenticated, setAuthenticated] = useState(initialValue);
	
	const getAuthentication = (username, password) => {
		
		//make a backend call with username and password
		const authentication = dummyLogin({username, password});
		//would normally get an auth key and store that
		setAuthenticated(authentication);
		
	}

	const logoutUser = () => {
		setAuthenticated (unAuthenticatedData)
	}


	return (
		<LoginContext.Provider value={{getAuthentication, authenticated, logoutUser}} >
			{children}
		</LoginContext.Provider>
	)
}


export {LoginContext};


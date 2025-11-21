import { useContext } from "react";
import { LoginContext } from "./LoginContext";

export const useLogin = () =>  {
 const context = useContext(LoginContext); 	
	if (!context) {
		throw new Error("login context must be used in a context provider")
	}
	else {
		return context;
	}
}

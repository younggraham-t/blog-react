import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({children, initialTheme='dark'}) {
	const [theme, setTheme] = useState(initialTheme);
	const toggleTheme = () => { 
		setTheme(theme === 'light' ? 'dark' : 'light')
	};
	
	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme)
	}, [theme]);
	// console.log(theme)
	return (
		<ThemeContext.Provider value={{theme, toggleTheme}} >
			{children}
		</ThemeContext.Provider>
	)
}


export const useTheme = () =>  useContext(ThemeContext);

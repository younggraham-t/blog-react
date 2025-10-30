
import { useState } from "react";
import { useTheme } from "./ThemeContext.jsx";

export default function ThemeToggle() {
	const {theme, toggleTheme} = useTheme();
	const [checked, setChecked] = useState(theme === "dark");
	
	console.log(toggleTheme)
	console.log(theme)
	
	const handleClick = () => {
		setChecked(!checked)
		toggleTheme()
		
	}
	
	return (
		<div className="flex gap-2 m-auto">
			<input 
			className="form-checkbox accent-accent"
			name="darkMode"
			type="checkbox" 
			{...checked}
			onChange={handleClick}></input>
		
			<label for="darkMode" className="flex gap-2">
			<span className={theme === 'dark' ? "" : "hidden"}>Dark</span>  
			<span className={theme === 'light' ? "" : "hidden"}>Light</span>
			</label>
		</div>
	)
	
}

import React from "react";
import { useState } from "react";
import { useLogin } from "../login/useLogin"
import LoginLink from "../login/LoginLink";


function UserDropdown() {
	const { authenticated, logoutUser } = useLogin();
	const [dropdownVisible, setDropdownVisible] = useState(false)

	const handleLogoutPressed = () => {
		logoutUser();
		setDropdownVisible(false);
	}

	const userOptions = [
		{ name: "Logout", function: handleLogoutPressed }
	]

	return (
		<div data-testid="user-dropdown" className="absolute top-5 right-5">
			{
				authenticated.authenticated ?
					<div>
						<p className="cursor-pointer" onClick={() => setDropdownVisible(!dropdownVisible)}>{authenticated.username}</p>
						{dropdownVisible &&
							<div className="relative top-5 bg-text text-background rounded-sm w-full m-auto">
								{userOptions.map((option) => {
									return <p className="cursor-pointer" key={option.name} onClick={option.function}>{option.name}</p>
								})}

							</div>
						}
					</div>
					:

					<LoginLink />
			}
		</div>
	)
}

export default UserDropdown

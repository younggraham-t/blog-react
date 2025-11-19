//this is meant to simulate a call to an authentication api
export const dummyLoginData = [
	{
		username: "joebob123",
		password: "12345"
	},
	{
		username: "coolguy456",
		password: "password",
	}
]

export const dummyLogin = (data) => {
	const userData = dummyLoginData.find((user) => user.username === data.username);
	if (userData !== undefined && userData.password === data.password) {
		return {username: data.username, authenticated: true};
	}
	else {
		return {username: data.username, authenticated: false};
	}
}

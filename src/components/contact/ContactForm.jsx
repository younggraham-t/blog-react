import { useState } from "react";

export default function ContactForm() {
	const emptyFormData = {
		name: "",
		email: "",
		message: "",
	}
	const [formData, setFormData] = useState(emptyFormData);
	const [success, setSuccess] = useState(false);
	
	const handleSubmit = (e) => {
		e.preventDefault();

		//send form data to api
		console.log(formData);

		//on success
		setFormData(emptyFormData)
		setSuccess(true)
	}
	
	const inputFieldClass = "bg-text text-background opacity-75 rounded-md p-1"

	return success ? <p className="text-center text-3xl text-green-500">Message Sent</p> : 
		<div className="text-center flex flex-col gap-4">
			<h2 className="text-2xl text-bold">Contact Me</h2>
			<form onSubmit={handleSubmit} className="flex flex-col gap-4 w-3/4 m-auto">
				<input 
					className={inputFieldClass}
					type="text" 
					name="name" 
					placeholder="Name"
					value={formData.name}
					onChange={e => setFormData({...formData, name:e.target.value})}
				/>
				<input 
					className={inputFieldClass}
					type="email" 
					name="email" 
					placeholder="Email"
					value={formData.email}
					onChange={e => setFormData({...formData, email:e.target.value})}
				/>
				<textarea 
					className={inputFieldClass}
					name="message" 
					placeholder="Message"
					value={formData.message}
					onChange={e => setFormData({...formData, message:e.target.value})}
				/>
				<button className="bg-amber-600 rounded w-1/3 m-auto text-gray-950" type="submit">Send</button>
			</form>
		</div>
}

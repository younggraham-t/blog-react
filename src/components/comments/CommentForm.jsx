import {useState} from 'react'

export default function CommentForm({formSubmitCallback}) {
	const emptyContent = {
		author: "",
		message: "",
	}
	const [content, setContent] = useState(emptyContent)
	
	
	return (
		<div className="flex flex-col gap-1 p-2">
			<h4 className="text-lg ">Leave a Comment:</h4>
		<form className="flex flex-col gap-2 text-gray-950">
			<input 
			className=" rounded-md p-1 w-full bg-blue-50" 
			type="text" 
			name="author" 
			value={content.author} 
			placeholder='Name' 
			onChange={e => setContent({...content, author: e.target.value})}></input>

			<textarea 
			className=" rounded-md p-1 w-full h-3/4 bg-blue-50" 
			value={content.message} 
			placeholder='Comment'
			onChange= {e => setContent({...content, message: e.target.value})}></textarea>
			<button className="p-0.5 w-1/6 rounded-sm text-lg bg-amber-500 text-gray-950 hover:bg-amber-800 active:bg-amber-200" type="submit" onClick={(e)=> {
				e.preventDefault();
				formSubmitCallback(content)
				setContent(emptyContent)
			}}>Post</button>
			
		</form>
		</div>
	)
}

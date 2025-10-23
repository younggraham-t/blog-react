import {useState} from 'react'

export default function CommentForm({formSubmitCallback}) {
	const [content, setContent] = useState('')
	
	
	return (
		<div className="flex flex-col gap-1 bg-blue-950 pt-1 pb-1">
			<h4 className="ml-4 text-xl text-blue-50">Leave a Comment!</h4>
			<textarea className="bg-blue-800 text-blue-50 rounded-md p-1 w-3/4 ml-4 h-1/2" value={content} onChange= {e => setContent(e.target.value)}></textarea>
			<button className="ml-4 p-0.5 w-1/6 rounded-sm text-xl bg-gray-950 text-blue-500 hover:text-blue-300 active:text-blue-900" type="submit" onClick={()=> {
				formSubmitCallback(content)
				setContent('')
			}}>Post</button>
		</div>
	)
}
